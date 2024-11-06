import { Link } from 'react-router-dom';
import styles from './Button.module.css'

function BtnLink({ link, text }) {
    return (
        <Link to={link} className={`${styles.link}`}>
            <div className={`${styles.button}`}>{text}</div>
            <div className={`${styles["button-gradient"]}`}></div>
        </Link>
    );
}

export default BtnLink;