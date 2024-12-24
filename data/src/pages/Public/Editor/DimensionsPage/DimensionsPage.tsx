import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { useLocation, useNavigate } from 'react-router-dom';
import BtnLink from '../../../../components/Button/Button';
import Transition from '../../../../components/Transition/Transition';
import unitData from './UnitData.json'
import styles from './DimensionsPage.module.css'

interface BoundingBox {
    size: THREE.Vector3;
    box: THREE.Box3;
}

interface Scale {
    x: number;
    y: number;
    z: number;
}

interface EdgesGeometry {
    edges: THREE.EdgesGeometry;
    centerPosition: THREE.Vector3;
}

const DimensionsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { file } = location.state || {};

    const [model, setModel] = useState<THREE.Mesh | null>(null);
    const [showMeasurements, setShowMeasurements] = useState<boolean>(false);
    const [boundingBox, setBoundingBox] = useState<BoundingBox | null>(null);
    const [edgesGeometry, setEdgesGeometry] = useState<EdgesGeometry | null>(null);
    const [scale, setScale] = useState<Scale>({ x: 1, y: 1, z: 1 });
    const [selectedUnit, setSelectedUnit] = useState("Units");
    const [isActiveUnit, setIsActiveUnit] = useState(false);

    const convertUnit = (value: number) => {
        const scaledValue = value * (selectedUnit === 'Millimeters' ? 10 : selectedUnit === 'Inches' ? 1 / 2.54 : 1);
        return scaledValue.toFixed(2);
    };

    const toggleUnitDropdown = () => {
        setIsActiveUnit((prev) => !prev);
    };

    const handleUnitClick = (unit: string) => {
        setSelectedUnit(unit);
        setIsActiveUnit(false);
    };

    useEffect(() => {
        if (file) {
            const reader = new FileReader();

            if (file.name.endsWith('.stl')) {
                const loader = new STLLoader();
                reader.onload = (event) => {
                    const geometry = loader.parse(event.target?.result as ArrayBuffer);

                    geometry.computeBoundingBox();
                    const bbox = geometry.boundingBox!;
                    const center = new THREE.Vector3();
                    bbox.getCenter(center);
                    geometry.translate(-center.x, -bbox.min.y, -center.z);

                    const material = new THREE.MeshStandardMaterial({ color: 'gray' });
                    const mesh = new THREE.Mesh(geometry, material);
                    setModel(mesh);

                    const box = new THREE.Box3().setFromObject(mesh);
                    const size = new THREE.Vector3();
                    box.getSize(size);
                    const centerPosition = new THREE.Vector3();
                    box.getCenter(centerPosition);

                    const boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);
                    const edges = new THREE.EdgesGeometry(boxGeometry);
                    setEdgesGeometry({ edges, centerPosition });

                    setBoundingBox({
                        size,
                        box,
                    });
                };
                reader.readAsArrayBuffer(file);
            }
        }
    }, [file]);

    const toggleMeasurements = () => {
        setShowMeasurements(!showMeasurements);
    };

    const handleScaleChange = (axis: keyof Scale, value: number) => {
        setScale((prev) => ({ ...prev, [axis]: value }));
    };

    const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedUnit(event.target.value);
    };

    const handleProceed = () => {
        const scaledDimensions = {
            width: boundingBox?.size.x! * scale.x,
            height: boundingBox?.size.y! * scale.y,
            depth: boundingBox?.size.z! * scale.z,
        };

        navigate('/processor', {
            state: {
                file,
                scale,
                selectedUnit,
                scaledDimensions,
            },
        });
    };

    return (
        <Transition>
            <div className={styles.dimensions}>
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

                        {model && (
                            <group scale={[scale.x, scale.y, scale.z]}>
                                <primitive object={model} />
                                {showMeasurements && edgesGeometry && (
                                    <lineSegments
                                        geometry={edgesGeometry.edges}
                                        material={new THREE.LineBasicMaterial({ color: 'red' })}
                                        position={edgesGeometry.centerPosition}
                                    />
                                )}
                            </group>
                        )}

                        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                            <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
                        </GizmoHelper>
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
                    </Canvas>
                </div>

                <div className={styles["tools-container"]}>
                    <h1>Adjust Dimensions</h1>

                    <div className={`${styles.check}`}>
                        <input onChange={toggleMeasurements} type="checkbox" id="check" />
                        <label htmlFor="check"><span>Show Measurements</span></label>
                    </div>

                    {showMeasurements && (
                        <div className={`${styles.measurements} ${styles.fade}`}>
                            <strong>Model Dimensions ({selectedUnit}):</strong>
                            <br />
                            {boundingBox && (
                                <div className={styles.fade}>
                                    <span>Width: {convertUnit(boundingBox.size.x * scale.x)} {selectedUnit}</span>
                                    <br />
                                    <span>Height: {convertUnit(boundingBox.size.y * scale.y)} {selectedUnit}</span>
                                    <br />
                                    <span>Depth: {convertUnit(boundingBox.size.z * scale.z)} {selectedUnit}</span>
                                </div>
                            )}
                        </div>
                    )}

                    <div className={`${styles.menu}`}>
                        <strong>Units:</strong>
                        <div
                            className={`${styles["select-btn"]} ${isActiveUnit ? styles.active : ""}`}
                            onClick={toggleUnitDropdown}
                        >
                            <span className={`${styles.unit}`}>{selectedUnit}</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        <ul className={`${styles.list}`}>
                            {unitData.map((type) => (
                                <li
                                    key={type.id}
                                    value={type.id}
                                    className={`${styles.option}`}
                                    style={{ '--i': type.id + 1 } as React.CSSProperties}
                                    onClick={() => handleUnitClick(type.name)}
                                >
                                    <span className={`${styles.name}`}>{type.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <strong>Transform Controls:</strong>
                        {['x', 'y', 'z'].map((axis) => (
                            <div key={axis} style={{ marginTop: '10px' }}>
                                <label>
                                    {axis.toUpperCase()} Scale:
                                    <input
                                        type="number"
                                        value={scale[axis as keyof Scale]}
                                        onChange={(e) => handleScaleChange(axis as keyof Scale, parseFloat(e.target.value) || 1)}
                                        step="0.1"
                                        min="0.1"
                                        className={styles.input}
                                    />
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className={styles.btn}>
                        <BtnLink text='Go Back' onClick={() => navigate(-1)} />
                        <BtnLink text='Proceed to Next Step' onClick={handleProceed} />
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default DimensionsPage;
