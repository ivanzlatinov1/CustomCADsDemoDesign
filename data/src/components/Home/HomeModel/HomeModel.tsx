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
                cadPath: '/assets/models/home_model.gltf',
                camCoordinates: { x: 20, y: 5, z: 7 },
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
            <ThreeJS cad={model} />
        </div>
    );
}

export default Cad;
