import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from "./Header.module.css"

function Header() {
    const toggleNavVisibility = () => {
        document.querySelector(`.${styles.menu}`).classList.toggle(styles.active);
    };

    return (
        <header className={`${styles.header}`}>

            <div className={`${styles["content-start"]}`}>
                <div onClick={toggleNavVisibility} className={`${styles.menu}`}>
                    <h2>CustomCADs</h2>
                    <span className={`${styles["left-icon"]}`}></span>
                    <span className={`${styles["right-icon"]}`}></span>
                </div>
                <div className={`${styles.nav}`}>
                    <Link onClick={toggleNavVisibility} to="/" style={{ "--i": 1 }}><span></span>Home</Link>
                    <Link onClick={toggleNavVisibility} to="/gallery" style={{ "--i": 2 }}><span></span>Gallery</Link>
                    <Link onClick={toggleNavVisibility} to="/register" style={{ "--i": 3 }}><span></span>Register</Link>
                    <Link onClick={toggleNavVisibility} to="/account" style={{ "--i": 4 }}><span></span>Account</Link>
                </div>
            </div>

            <div className={`${styles["content-end"]}`}>
                <div className={`${styles["icon-wrapper"]}`} data-tooltip="Gallery">
                    <FontAwesomeIcon icon={faStore} size="2x" style={{ cursor: 'pointer' }} />
                </div>
                <span>|</span>
                <div className={`${styles["icon-wrapper"]}`} data-tooltip="Payments">
                    <FontAwesomeIcon icon={faMoneyCheckDollar} size="2x" style={{ cursor: 'pointer' }} />
                </div>
                <span>|</span>
                <div className={`${styles["icon-wrapper"]}`} data-tooltip="Notifications">
                    <FontAwesomeIcon icon={faBell} size="2x" style={{ cursor: 'pointer' }} />
                </div>
                <span>|</span>
                <div className={`${styles["icon-wrapper"]}`} data-tooltip="Settings">
                    <FontAwesomeIcon icon={faUserCog} size="2x" style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </header>
    );
}

export default Header;