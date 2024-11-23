import React, { useEffect, useState } from 'react';
import ThreeJS from './ThreeJSCad';
import ThreeJSCad, { emptyThreeJSCad } from './Coordinates/HomeModel.interface';
import styles from './ThreeJS.module.css';

interface CadProps {
    cad?: ThreeJSCad;
    isHomeCad?: boolean;
}

function Cad({ cad, isHomeCad }: CadProps) {
    const [model, setModel] = useState<ThreeJSCad>(emptyThreeJSCad);

    useEffect(() => {
        if (isHomeCad) {
            setModel({
                id: 1,
                cadPath: '/assets/models/model.glb',
                camCoordinates: { x: 4, y: 2, z: 8},
                panCoordinates: { x: 0, y: 0, z: 0 },
            });
        } else if (cad) {
            setModel(cad);
        } else {
            console.error('Cad source not provided.');
        }
    }, [cad, isHomeCad]);

    return (
        <div className={styles.cadContainer}>
            <div className={`${styles.bubbles}`}>
                {[23, 8, 14, 23, 19, 38, 44, 8, 13, 22, 16, 5, 14, 33, 11, 6, 21, 19, 28, 9, 19, 20, 17, 7, 35, 16, 23, 1, 3, 14, 2, 19, 38, 44, 8, 13, 22, 16, 5, 34, 17].map((i, index) => (
                    <span key={index} style={{ "--i": i } as React.CSSProperties}></span>
                ))}
            </div>
            <ThreeJS cad={model} />
            <div className={`${styles.message}`}><span>Welcome to the Land of 3D models!</span></div>
        </div>
    );
}

export default Cad;
