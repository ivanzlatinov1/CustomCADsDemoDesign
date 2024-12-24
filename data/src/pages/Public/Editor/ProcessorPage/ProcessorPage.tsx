import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { useLocation, useNavigate } from 'react-router-dom';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import Transition from '../../../../components/Transition/Transition';
import BtnLink from '../../../../components/Button/Button';
import styles from './ProcessorPage.module.css'

type LocationState = {
    file: File;
    scale: { x: number; y: number; z: number };
    unit: string;
    scaledDimensions?: { width: number; height: number; depth: number };
};

const ProcessorPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { file, scale, unit, scaledDimensions } = (location.state || {}) as LocationState;

    const [volume, setVolume] = useState<number>(0);
    const [filamentUsed, setFilamentUsed] = useState<number>(0);
    const [totalCost, setTotalCost] = useState<number>(0);
    const filamentDensity = 1.25; // Filament density in g/cm³ for PLA, adjust as needed
    const filamentCostPerKg = 100; // Cost of 1kg of filament in dollars

    useEffect(() => {
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                if (!event.target?.result) return;

                const loader = new STLLoader();
                const geometry = loader.parse(event.target.result as ArrayBuffer);

                // Scale the geometry
                geometry.scale(scale.x, scale.y, scale.z);

                // Compute volume
                const computedVolume = computeVolume(geometry);
                setVolume(computedVolume);

                // Compute filament usage
                const filamentUsage = computedVolume * filamentDensity; // Assuming volume is in cm³
                setFilamentUsed(filamentUsage);

                // Calculate the cost of filament used (in grams) and add profit
                const costOfFilament = (filamentUsage / 1000) * filamentCostPerKg; // Cost in dollars
                const profitMargin = 1.2; // 20% profit
                setTotalCost(costOfFilament * profitMargin);
            };

            reader.readAsArrayBuffer(file);
        }
    }, [file, scale]);

    const computeVolume = (geometry: THREE.BufferGeometry): number => {
        if (!geometry.isBufferGeometry) return 0;

        geometry = geometry.toNonIndexed(); // Convert to non-indexed geometry for accurate volume calculation
        const position = geometry.attributes.position.array as Float32Array;
        let volume = 0;

        for (let i = 0; i < position.length; i += 9) {
            const v0 = new THREE.Vector3(position[i], position[i + 1], position[i + 2]);
            const v1 = new THREE.Vector3(position[i + 3], position[i + 4], position[i + 5]);
            const v2 = new THREE.Vector3(position[i + 6], position[i + 7], position[i + 8]);

            volume += v0.dot(v1.cross(v2)) / 6.0;
        }

        return Math.abs(volume / 1000); // Return volume in cm³
    };

    return (
        <Transition>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2>STL Processor</h2>
                    <p className={styles.unit}><strong>Unit:</strong> {unit}</p>

                    <div className={styles.details}>
                        <h3>3D Model Details</h3>
                        {scaledDimensions && (
                            <>
                                <p><strong>Width:</strong> {scaledDimensions.width.toFixed(2)} {unit}</p>
                                <p><strong>Height:</strong> {scaledDimensions.height.toFixed(2)} {unit}</p>
                                <p><strong>Depth:</strong> {scaledDimensions.depth.toFixed(2)} {unit}</p>
                            </>
                        )}
                    </div>

                    <div className={styles.details}>
                        <h3>Calculated Volume and Filament Usage</h3>
                        <p><strong>Volume:</strong> {volume.toFixed(2)} cm³</p>
                        <p><strong>Estimated Filament Used:</strong> {filamentUsed.toFixed(2)} g</p>
                        <small>Filament density: {filamentDensity} g/cm³</small>
                    </div>

                    <div className={styles.details}>
                        <h3>Total Cost</h3>
                        <p><strong>Total Cost (including profit):</strong> ${totalCost.toFixed(2)}</p>
                    </div>

                    <div className={styles.btn}>
                        <BtnLink text='Go Back' onClick={() => navigate(-1)} />
                        <BtnLink text='Finish Editing' link='/details' />
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default ProcessorPage;