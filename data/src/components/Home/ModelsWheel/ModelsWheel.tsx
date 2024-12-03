import React, { useState } from 'react';
import Cad from '../HomeModel/HomeModel';
import styles from './ModelsWheel.module.css'

const ModelsWheel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const models = [
        { id: 0, cadPath: '/assets/models/model1.glb', camCoordinates: { x: 5, y: 3, z: 10 }, panCoordinates: { x: 0, y: 0, z: 0 } },
        { id: 1, cadPath: '/assets/models/model.glb', camCoordinates: { x: 5, y: 3, z: 10 }, panCoordinates: { x: 0, y: 0, z: 0 } },
        { id: 2, cadPath: '/assets/models/model1.glb', camCoordinates: { x: 5, y: 3, z: 10 }, panCoordinates: { x: 0, y: 0, z: 0 } },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? models.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === models.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.slider}>
            <div className={styles.left} onClick={handlePrev}>
                <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    strokeWidth="0.00024000000000000003"
                >
                    <path
                        d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
            <div className={styles.content} style={{ '--current-index': currentIndex } as React.CSSProperties}>
                {models.map((model, index) => (
                    <div
                        key={model.id}
                        className={`${styles.model} ${index === currentIndex ? styles.active : ''}`}
                    >
                        <Cad cad={model} />
                    </div>
                ))}
            </div>
            <div className={styles.right} onClick={handleNext}>
                <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    strokeWidth="0.00024000000000000003"
                    transform="rotate(180)"
                >
                    <path
                        d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </div>
    );
}

export default ModelsWheel;
