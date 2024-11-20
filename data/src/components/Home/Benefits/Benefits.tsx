import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sheet from './Sheets/Sheet';
import styles from './Benefits.module.css'

const Benefits: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styles.container}`}>
            <div onClick={() => navigate("/gallery")} className={`${styles.picture}`}></div>
            <div className={`${styles.content}`}>
                <h1>Why should you choose CustomCADs?</h1>
                <Sheet 
                title="Custom Designs"
                icon="fas fa-eye"
                details="Describe your project, and we will create the model from scratch in SolidWorks and deliver it 3D-printed!"
                />
                <Sheet 
                title="Pre-made Designs"
                icon="fas fa-robot"
                details="Choose a design from our gallery and receive it fully 3D printed!"
                />
                <Sheet 
                title="Designer Network"
                icon="fas fa-globe"
                details="Connect with other expert 3D designers and get your project done quickly!"
                />
            </div>
        </div>
    );
}

export default Benefits;