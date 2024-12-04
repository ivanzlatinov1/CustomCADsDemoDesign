import React from 'react';
import PopularModel from './PopularModel'
import BtnLink from '../../Button/Button';
import styles from './MostPopularModels.module.css'

const MostPopularModels: React.FC = () => {

    const models = [
        {
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

    return (
        <>
            <div className={`${styles.models}`}>
                {models.map((model, index) => (
                    <PopularModel key={index} model={model} />
                ))}
                <div className={`${styles.btn}`}>
                    <BtnLink text='Go to Gallery' link='/gallery'></BtnLink>
                </div>
            </div>

        </>
    );
}

export default MostPopularModels;
