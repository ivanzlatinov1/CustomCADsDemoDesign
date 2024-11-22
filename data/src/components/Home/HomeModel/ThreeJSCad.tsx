import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Spinner from './Spinner/Spinner';
import ThreeJSCad from './Coordinates/HomeModel.interface';
import styles from './ThreeJS.module.css'

interface ThreeJSProps {
  cad: ThreeJSCad
}

function ThreeJS({ cad }: ThreeJSProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const isTouchedRef = useRef(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (cad.cadPath) {
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.001, 1000);
      camera.position.set(cad.camCoordinates.x, cad.camCoordinates.y, cad.camCoordinates.z);

      const { x, y, z } = cad.camCoordinates;
      if (!x && !y && !z) {
        camera.position.set(0, 0, 5);
      }

      const mount = mountRef.current;
      if (!mount || mount.children.length > 0) {
        return;
      }

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      mount.appendChild(renderer.domElement);

      let isInteracting = false;
      let resumeTimeout: ReturnType<typeof setTimeout>;

      function cadTouched() {
        if (!isTouchedRef.current) {
          window.dispatchEvent(new CustomEvent('PositionChanged'));
          isTouchedRef.current = true;
        }

        isInteracting = true;
        clearTimeout(resumeTimeout);

        resumeTimeout = setTimeout(() => {
          isInteracting = false;
        }, 1500);
      }

      function sendPosition() {
        const [camCoords, panCoords] = [camera.position, controls.target];
        window.dispatchEvent(new CustomEvent('SavePosition', { detail: { camCoords, panCoords, } }));
      };

      function resetPosition() {
        const [camCoords, panCoords] = [cad.camCoordinates, cad.panCoordinates];
        camera.position.set(camCoords.x, camCoords.y, camCoords.z);
        controls.target.set(panCoords.x, panCoords.y, panCoords.z);
        window.dispatchEvent(new CustomEvent('ResetsPosition'));
      };

      function trackChanges() {
        isTouchedRef.current = false;
      };

      function updateRendererSize() {
        const width = mount!.clientWidth;
        const height = mount!.clientHeight;

        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
      updateRendererSize();

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      function addDirectionalLight(intensity: number, coords: { x: number, y: number, z: number }) {
        const light = new THREE.DirectionalLight(0xffffff, intensity);
        light.position.set(coords.x, coords.y, coords.z);
        scene.add(light);
      }
      addDirectionalLight(1, { x: 5, y: 10, z: 5 });
      addDirectionalLight(0.5, { x: -5, y: 5, z: 5 });
      addDirectionalLight(0.5, { x: 5, y: -5, z: 5 });
      addDirectionalLight(0.3, { x: 0, y: 5, z: -5 });
      addDirectionalLight(0.3, { x: 0, y: -5, z: 0 });
      addDirectionalLight(0.3, { x: -5, y: 0, z: 0 });
      addDirectionalLight(0.3, { x: 5, y: 0, z: 0 });

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
      controls.target.set(cad.panCoordinates.x, cad.panCoordinates.y, cad.panCoordinates.z);
      controls.update();

      controls.enableZoom = true;

      const loader = new GLTFLoader();
      loader.load(
        cad.cadPath,
        (gltf) => {
          const model = gltf.scene;
          
          const bbox = new THREE.Box3().setFromObject(model);
          const size = new THREE.Vector3();
          bbox.getSize(size);

          const maxSize = 10;
          const scale = maxSize / Math.max(size.x, size.y, size.z) + 4.5;
          model.scale.set(scale, scale, scale);

          scene.add(model);
          setLoader(false);
        },
        undefined,
        (error) => console.error('Error loading model:', error)
      );

      controls.maxDistance = 15;
      controls.minDistance = 10;
      controls.maxPolarAngle = Math.PI / 2;
      controls.minPolarAngle = 0;

      controls.addEventListener('change', cadTouched);

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
      animate();

      controls.addEventListener('change', cadTouched);
      window.addEventListener('resize', updateRendererSize);
      window.addEventListener('TrackChanges', trackChanges);
      window.addEventListener('SendPosition', sendPosition);
      window.addEventListener('ResetPosition', resetPosition);


      return () => {
        mount.removeChild(renderer.domElement);
        controls.removeEventListener('change', cadTouched);
        window.removeEventListener('resize', updateRendererSize);
        window.removeEventListener('TrackChanges', trackChanges);
        window.removeEventListener('SendPosition', sendPosition);
        window.addEventListener('ResetPosition', resetPosition);
      };
    }

  }, [loader, cad.id, cad.cadPath]);

  return loader ? <Spinner /> :
    <div className={styles.modelContainer}>
      <i className={`${styles.border}`} style={{ "--color": "#8c09ff5f" } as React.CSSProperties}></i>
      <i className={`${styles.border}`} style={{ "--color": "#550cf377" } as React.CSSProperties}></i>
      <i className={`${styles.border}`} style={{ "--color": "#e43bc85e" } as React.CSSProperties}></i>
      <div ref={mountRef} />
    </div>
    ;
}

export default ThreeJS;