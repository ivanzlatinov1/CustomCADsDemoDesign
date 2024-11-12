import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface BtnLinkProps {
    link?: string;
    text: string;
    scroll?: boolean;
    type?: "button" | "submit";
    className?: string;
}

const BtnLink: React.FC<BtnLinkProps> = ({ link = "/", text, scroll = false, type = "button" }) => {
    function scrollDown() {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    function handleScroll(e: React.MouseEvent<HTMLAnchorElement>) {
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
            onClick={scroll ? handleScroll : undefined}
            className={`${styles.link}`}
        >
            <div className={`${styles.button}`}>{text}</div>
            <div className={`${styles["button-gradient"]}`}></div>
        </Link>
    );
};

export default BtnLink;
