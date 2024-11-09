import { Link } from 'react-router-dom';
import styles from './Button.module.css'

function BtnLink({ link, text, scroll }) {

    function scrollDown() {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    return (
        <Link
            to={scroll ? "#" : link}
            onClick={scroll ? scrollDown : null}
            className={`${styles.link}`}
        >
            <div className={`${styles.button}`}>{text}</div>
            <div className={`${styles["button-gradient"]}`}></div>
        </Link>
    );
}

export default BtnLink;