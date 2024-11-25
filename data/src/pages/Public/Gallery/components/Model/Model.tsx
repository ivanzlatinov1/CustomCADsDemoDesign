import React from 'react'
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate('/product', { state: { model } });
    };

    const handleBuyNowClick = () => {
        navigate('/wallet');
    }

    return (
        <div className={`${styles.model}`}>
            <b></b>
            <img src={model.src} alt="Model Picture" />
            <div className={`${styles.content}`}>
                <p className={`${styles.title}`}>{model.name}<br /><span>{model.author}</span></p>
                <div className={`${styles.button}`}>
                    <div className={`${styles["button-container"]}`}>
                        <button onClick={handleDetailsClick} className={`${styles.btn}`}>
                            <span className={`${styles.hover}`}></span>
                            Details
                        </button>
                        <button onClick={handleBuyNowClick} className={`${styles.btn}`}>
                            <span className={`${styles.hover}`}></span>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Model;
