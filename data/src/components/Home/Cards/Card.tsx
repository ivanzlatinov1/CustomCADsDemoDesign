import React, { forwardRef } from 'react';
import styles from './Card.module.css'

interface CardProps {
    title: string;
    icon: string;
    pricing: string;
    desc1: string;
    desc2: string;
    desc3: string;
    image: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
    title, icon, pricing, desc1, desc2, desc3, image
}, ref) => {
    return (
        <div ref={ref} className={`${styles["card-container"]}`}>
         <article className={`${styles["card-article"]}`}>
            <i className={`${icon} ${styles["card-icon"]}`}></i>

            <div className={`${styles["card-data"]}`}>
               <h3 className={`${styles["card-title"]}`}>{title}</h3>
               <span className={`${styles["card-price"]}`}>${pricing}</span>
            </div>

            <img src={image} alt="image" className={`${styles["card-bg"]}`} />

            <a href="#" className={`${styles["card-button"]}`}>
               Learn More <i className="fas fa-arrow-right"></i>
            </a>
         </article>
         <div className={`${styles.description}`}>
            <ul className={`fa-ul ${styles.list}`}>
               <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>{desc1}</li>
               <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>{desc2}</li>
               <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>{desc3}</li>
            </ul>
         </div>
      </div>
    );
});

Card.displayName = 'Card';

export default Card;