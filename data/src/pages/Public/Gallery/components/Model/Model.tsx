import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Model.module.css'

interface ModelProps {
    model: {
        src: string;
        name: string;
        likes: string;
        views: string;
        category: string;
        author: string;
        description: string;
        price: string;
        upload_date: string;
    };
}

const Model: React.FC<ModelProps> = ({ model }) => {
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate('/product', { state: { model } });
    };

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    return (
        <div className={`${styles.model}`}>
            <b></b>
            <img onClick={handleDetailsClick} src={model.src} alt="Model Picture" />
            <div className={`${styles.content}`}>
                <p onClick={handleDetailsClick} className={`${styles.title}`}>{model.name}<br /><span>{model.category}</span></p>
                <div className={`${styles["button-container"]}`}>
                    <button onClick={handleLikeClick} className={`${styles.heart} ${liked ? styles.clicked : ""}`}>
                        <i className="fas fa-heart"></i>
                    </button>
                    <div className={`${styles.views}`}>
                        <i className="fas fa-eye"></i>
                        <div>{model.views}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Model;
