import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function BtnLink({ link, text, scroll, type = "button" }) {
    function scrollDown() {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    function handleSubmit(e) {
        if (type === "submit") {
            e.preventDefault();

            const form = e.target.closest("form");
            if (form && form.checkValidity()) {
                form.submit();
            } else if (form) {
                form.reportValidity();
            }
        } else if (scroll) {
            scrollDown();
        }
    }

    return type === "submit" ? (
        <div
            onClick={handleSubmit}
            className={`${styles.link}`}
            role="button"
            tabIndex={0}
        >
            <div className={`${styles.button}`}>{text}</div>
            <div className={`${styles["button-gradient"]}`}></div>
        </div>
    ) : (
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
