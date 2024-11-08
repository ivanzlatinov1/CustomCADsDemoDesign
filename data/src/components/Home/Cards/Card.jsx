import Button from '../../Button/Button'
import styles from './Card.module.css'

function Card({ title, pricing, description, image }) {
    return (
        <div className={`${styles.card}`}>
            <img src={image} alt="card-image" className={`${styles["card-img"]}`} />

            <div className={`${styles["card-data"]}`}>
                <h2 className={`${styles.title}`}>{title}</h2>
                <span className={`${styles.pricing}`}>{pricing}</span>
                <p className={`${styles.desc}`}>{description}</p>
                <Button link="#" text="Buy Now" />
            </div>
        </div>
    );
}

export default Card;