import React from 'react'
import styles from './Model.module.css'

interface ModelProps {
    model: {
        src: string;
        name: string;
        role: string;
        author: string;
    };
}

const Model: React.FC<ModelProps> = ({ model }) => {
    return (
        <div className={`${styles.model}`}>
            <b></b>
            <img src={model.src} alt="Model Picture" />
            <div className={`${styles.content}`}>
                <p className={`${styles.title}`}>{model.name}<br /><span>{model.author}</span></p>
                <div className={`${styles.button}`}>
                    <div className={`${styles["button-container"]}`}>
                        <button className={`${styles.btn}`}>
                            <span className={`${styles.hover}`}></span>
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Model;
