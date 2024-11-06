import { Link } from 'react-router-dom';
import styles from './Button.module.css'

function BtnLink({ link }) {
    return (
        <Link to={link} className={`${styles.link}`}>
            <div className={`${styles.button}`}>Get Started</div>
            <div className={`${styles["button-gradient"]}`}></div>
        </Link>
    );
}

export default BtnLink;