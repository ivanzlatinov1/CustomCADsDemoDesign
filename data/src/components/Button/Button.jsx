import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function BtnLink({ link, text, scroll, type = "button" }) {
    function scrollDown() {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    function handleScroll(e) {
        e.preventDefault();
        scrollDown();
    }

    return type === "submit" ? (
        <button
            type="submit"
            className={`${styles.link} ${styles.buttonWrapper}`}
        >
            <div className={`${styles.button}`}>{text}</div>
            <div className={`${styles["button-gradient"]}`}></div>
        </button>
    ) : (
        <Link
            to={scroll ? "#" : link}
            onClick={scroll ? handleScroll : null}
            className={`${styles.link}`}
        >
            <div className={`${styles.button}`}>{text}</div>
            <div className={`${styles["button-gradient"]}`}></div>
        </Link>
    );
}

export default BtnLink;
