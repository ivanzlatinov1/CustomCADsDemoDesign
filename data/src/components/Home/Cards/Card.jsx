import Button from '../../Button/Button'
import styles from './Card.module.css'

function Card({ title, icon, pricing, description, image }) {
    return (
        <div className={`${styles["card-container"]}`}>
            <article className={`${styles["card-article"]}`}>
               <i className={`${icon} ${styles["card-icon"]}`}></i>

               <div className={`${styles["card-data"]}`}>
                  <h3 className={`${styles["card-title"]}`}>{title}</h3>
                  <span className={`${styles["card-price"]}`}>${pricing}</span>
               </div>

               <img src={image} alt="image" className={`${styles["card-bg"]}`} />
               
               <a href="#" className={`${styles["card-button"]}`}>
                  View More <i className="fas fa-arrow-right"></i>
               </a>
            </article>
         </div>
    );
}

export default Card;