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
        <div className={styles.model}>
            <img src={model.src} alt={model.name} />
            <h1>{model.name}</h1>
            <div className={styles.details}>
                <h2>{model.name}</h2>
                <p>{model.role}</p>
                <div>By: {model.author}</div>
                <div className={styles.btn}>
                    <button>Learn More</button>
                </div>
            </div>
            <div className={styles.trapezoidTitle}>
                {model.name}
            </div>
        </div>
    );
};

export default Model;
