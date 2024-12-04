import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './MostPopularModels.module.css'

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

const PopularModel: React.FC<ModelProps> = ({ model }) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate('/product', { state: { model } });
    };

    return (
        <div className={`${styles.model}`}>
            <b></b>
            <img onClick={handleDetailsClick} src={model.src} alt="Model Picture" />
            <div className={`${styles.content}`}>
                <p onClick={handleDetailsClick} className={`${styles.title}`}>{model.name}<br /><span>{model.category}</span></p>
                <div className={`${styles["button-container"]}`}>
                    
                    <div className={`${styles.views}`}>
                        <i className="fas fa-eye"></i>
                        <div>{model.views}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularModel;
