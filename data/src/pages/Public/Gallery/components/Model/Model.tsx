import React from 'react'
import BtnLink from '../../../../../components/Button/Button'
import styles from './Model.module.css'

interface ModelProps {
    image: {
        src: string;
        name: string;
        role: string;
        author: string;
    };
}

const Model: React.FC<ModelProps> = ({ image }) => {
    return (
        <div className={`${styles.model}`}>
            <img src={image.src} alt={image.name} />
            <h1>{image.name}</h1>
            <div className={`${styles.details}`}>
                <h2>{image.name}</h2>
                <p>{image.role}</p>
                <div>By: {image.author}</div>
                <div className={`${styles.btn}`}>
                    <BtnLink text="Details" link="/not-implemented" />
                </div>
            </div>
        </div>
    );
};

export default Model;
