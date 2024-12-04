import React, { useState } from 'react';
import PopularModel from './PopularModel'
import BtnLink from '../../Button/Button';
import styles from './MostPopularModels.module.css'

const MostPopularModels: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const models = [
        {
            index: 0,
            src: "https://i.pinimg.com/736x/4c/a5/92/4ca592067318c81476d1b1857bd12479.jpg",
            name: "Computer",
            category: "Electronics",
            likes: "100",
            views: "1.590",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: "30$",
            author: "Designer",
            upload_date: "12.12.2024"
        },
        {
            index: 1,
            src: "https://i.pinimg.com/736x/ba/1d/a3/ba1da367b352136f712dfeb621ff158c.jpg",
            name: "Monster",
            category: "Toys",
            likes: "100",
            views: "3.973",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: "30$",
            author: "Designer",
            upload_date: "12.12.2024"
        },
        {
            index: 2,
            src: "https://i.pinimg.com/736x/51/e4/92/51e4925fa8940347ef3604146a7d132d.jpg",
            name: "Car",
            category: "Vehicles",
            likes: "100",
            views: "1.772",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: "30$",
            author: "Designer",
            upload_date: "12.12.2024"
        }
    ]

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? models.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === models.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className={`${styles.models}`}>
                <div className={styles.left} onClick={handlePrev}>
                    <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className={styles.popular} style={{ '--current-index': currentIndex } as React.CSSProperties}>
                    {models.map((model, index) => {
                        const prevIndex = (currentIndex - 1 + models.length) % models.length;
                        const nextIndex = (currentIndex + 1) % models.length;

                        if (index === prevIndex || index === currentIndex || index === nextIndex) {
                            return (
                                <div
                                    key={model.index}
                                    className={`${styles.mod} ${index === currentIndex ? styles.active : ''}`}
                                >
                                    <PopularModel key={index} model={model} />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className={styles.right} onClick={handleNext}>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className={`${styles.btn}`}>
                    <BtnLink text='Go to Gallery' link='/gallery'></BtnLink>
                </div>
            </div>

        </>
    );
}

export default MostPopularModels;
