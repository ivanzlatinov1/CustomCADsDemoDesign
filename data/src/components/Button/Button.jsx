import { Link } from 'react-router-dom';
import styles from './Button.module.css'

function BtnLink() {
    return (
        <Link to="/register" className={`${styles.link}`}>
                <div className={`${styles.button}`}>Get Started</div>
                <div className={`${styles["button-gradient"]}`}></div>
        </Link>
    );
}

export default BtnLink;