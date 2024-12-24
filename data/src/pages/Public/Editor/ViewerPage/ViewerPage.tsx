import { useLocation, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import Transition from '../../../../components/Transition/Transition';
import BtnLink from '../../../../components/Button/Button';
import styles from "./ViewerPage.module.css"

interface MaterialCategory {
  title: string;
  description: string;
  subMaterials: string[];
  thicknessOptions?: string[];
  acrylicColors?: string[];
}

interface LocationState {
  file?: File;
}

const ViewerPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [model, setModel] = useState<THREE.Mesh | null>(null); // Stores the 3D model
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null); // Currently expanded category
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null); // Selected material (e.g., "Metal" or "Plastic")
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Selected option (e.g., "Steel" or "Acrylic Color")
  const [selectedThickness, setSelectedThickness] = useState<string | null>(null); // Selected thickness
  const locationState = location.state as LocationState;
  const file = locationState?.file;

  const materialCategories: MaterialCategory[] = [
    {
      title: 'METALS',
      description: 'Mild Steel, Stainless, Copper, Titanium...',
      subMaterials: ['Aluminum', 'Copper', 'Steel', 'Titanium'],
      thicknessOptions: ['0.5mm', '1mm', '1.5mm', '2mm', '3mm'],
    },
    {
      title: 'COMPOSITES',
      description: 'Carbon fiber, G10, ACM...',
      subMaterials: ['Carbon Fiber', 'G10', 'ACM'],
    },
    {
      title: 'PLASTICS',
      description: 'Acrylic, Delrin, ABS...',
      subMaterials: ['Acrylic Colors', 'Delrin', 'ABS'],
      acrylicColors: ['Clear', 'Black', 'White', 'Red', 'Blue', 'Green'],
      thicknessOptions: ['2mm', '3mm', '5mm', '8mm', '10mm'],
    },
    {
      title: 'WOODS',
      description: 'Birch plywood, MDF, hardboard...',
      subMaterials: ['Birch Plywood', 'MDF', 'Hardboard'],
    },
  ];

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      if (file.name.endsWith('.stl')) {
        const loader = new STLLoader();
        reader.onload = (event) => {
          const geometry = loader.parse(event.target?.result as ArrayBuffer);

          geometry.computeBoundingBox();
          const boundingBox = geometry.boundingBox!;
          const center = new THREE.Vector3();
          boundingBox.getCenter(center);
          geometry.translate(-center.x, -boundingBox.min.y, -center.z);

          const material = new THREE.MeshStandardMaterial({ color: 'gray' });
          const mesh = new THREE.Mesh(geometry, material);
          setModel(mesh);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  }, [file]);

  const toggleCategory = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
    setSelectedMaterial(null);
    setSelectedOption(null);
    setSelectedThickness(null);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setSelectedThickness(null);
  };

  const handleThicknessSelect = (thickness: string) => {
    setSelectedThickness(thickness);
  };

  const handleNext = () => {
    navigate('/adjust-dimensions', {
      state: {
        file,
        selectedMaterial: selectedOption,
        selectedThickness,
      },
    });
  };

  return (
    <Transition>
      <div className={styles["viewer-page"]}>
        {/* Viewer Section */}
        <div className={styles["viewer-container"]}>
          <Canvas
            camera={{
              position: [0, 75, 350],
              fov: 50,
            }}
          >
            <OrbitControls />
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} intensity={1} />

            <group>
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[250, 250]} />
                <meshStandardMaterial color="white" />
              </mesh>
              <lineSegments
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0.01, 0]}
                geometry={new THREE.EdgesGeometry(new THREE.PlaneGeometry(250, 250))}
                material={new THREE.LineBasicMaterial({ color: 'black' })}
              />
            </group>

            {model && <primitive object={model} />}

            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
            </GizmoHelper>
          </Canvas>
        </div>

        <div className={styles["material-section"]}>
          {materialCategories.map((material, index) => (
            <div key={index}>
              <div
                onClick={() => toggleCategory(material.title)}
                className={styles.materials}
              >
                <div>
                  <h4 style={{ margin: '0', fontWeight: 'bold' }}>{material.title}</h4>
                  <p style={{ margin: '5px 0', color: '#888' }}>{material.description}</p>
                </div>
                <span style={{ fontSize: '1.5em', color: '#888' }}>
                  {expandedCategory === material.title ? '-' : '+'}
                </span>
              </div>

              {expandedCategory === material.title && (
                <div
                  className={`${styles.expanded} ${styles.fade}`}
                >
                  {material.subMaterials.map((subMaterial, subIndex) => (
                    <div
                      key={subIndex}
                      onClick={() => handleOptionSelect(subMaterial)}
                      className={`${styles.fade} ${styles["sub-material"]}`}
                      style={{
                        margin: '5px 0',
                        color: selectedOption === subMaterial ? 'purple' : '#555',
                        cursor: 'pointer',
                      }}
                    >
                      {subMaterial}
                    </div>
                  ))}

                  {selectedOption === 'Acrylic Colors' && (
                    <div className={`${styles.fade} ${styles["acrylic-colors"]}`} style={{ marginTop: '10px', paddingLeft: '10px' }}>
                      <h5>Select Acrylic Color:</h5>
                      {material.acrylicColors?.map((color, index) => (
                        <div
                          key={index}
                          onClick={() => handleOptionSelect(color)}
                          className={styles["acrylic-colors-dropdown"]}
                          style={{
                            margin: '5px 0',
                            color: selectedOption === color ? 'purple' : '#555',
                            cursor: 'pointer',
                          }}
                        >
                          {color}
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedOption && material.thicknessOptions && (
                    <div className={`${styles["thickness-options"]} ${styles.fade}`} style={{ marginTop: '10px', paddingLeft: '10px' }}>
                      <h5>Select Thickness:</h5>
                      {material.thicknessOptions.map((thickness, index) => (
                        <div
                          key={index}
                          onClick={() => handleThicknessSelect(thickness)}
                          style={{
                            margin: '5px 0',
                            color: selectedThickness === thickness ? 'purple' : '#555',
                            cursor: 'pointer',
                          }}
                        >
                          {thickness}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          ))}

          {selectedOption && selectedThickness && (
            <div className={styles.fade} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#d4f4dd' }}>
              <strong>Selected:</strong> {selectedOption}
              <br />
              <strong>Thickness:</strong> {selectedThickness}
            </div>
          )}

          <div className={styles.btn}>
            <BtnLink text='Go Back' onClick={() => navigate(-1)} />
            <BtnLink text='Proceed' onClick={handleNext} />
          </div>

        </div>
      </div>
    </Transition>
  );
};

export default ViewerPage;