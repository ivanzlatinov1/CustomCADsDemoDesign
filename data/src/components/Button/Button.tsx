import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface BtnLinkProps {
    link?: string;
    text: string;
    scroll?: boolean;
    scrollTargetId?: string;
    type?: "button" | "submit";
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>) => void;
}

const BtnLink: React.FC<BtnLinkProps> = ({ link = "/", text, scroll = false, scrollTargetId, type = "button", onClick }) => {
    function scrollDown() {
        if (scrollTargetId) {
            const targetElement = document.getElementById(scrollTargetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    function handleScroll(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        scrollDown();
    }

    return type === "submit" ? (
        <button
            type="submit"
            className={`${styles.link} ${styles.buttonWrapper}`}
            onClick={onClick}
        >
            <div className={`${styles.button}`}>{text}</div>
            <div className={`${styles["button-gradient"]}`}></div>
        </button>
    ) :
        onClick ? (
            <div className={`${styles.link}`} onClick={onClick}>
                <div className={`${styles.button}`}>{text}</div>
                <div className={`${styles["button-gradient"]}`}></div>
            </div>
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
