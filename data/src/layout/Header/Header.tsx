import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faStore, faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const toggleNavVisibility = (): void => {
        const menuElement = document.querySelector(`.${styles.menu}`);
        if (menuElement) {
            menuElement.classList.toggle(styles.active);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles['content-start']}>
                <div onClick={toggleNavVisibility} className={styles.menu}>
                    <h2>CustomCADs</h2>
                    <span className={styles['left-icon']}></span>
                    <span className={styles['right-icon']}></span>
                </div>
                <div className={styles.nav}>
                    <Link onClick={toggleNavVisibility} to="/" style={{ '--i': 1 } as React.CSSProperties}><span></span>Home</Link>
                    <Link onClick={toggleNavVisibility} to="/gallery" style={{ '--i': 2 } as React.CSSProperties}><span></span>Gallery</Link>
                    <Link onClick={toggleNavVisibility} to="/register" style={{ '--i': 3 } as React.CSSProperties}><span></span>Register</Link>
                    <Link onClick={toggleNavVisibility} to="/about" style={{ '--i': 4 } as React.CSSProperties}><span></span>About us</Link>
                </div>
            </div>

            <div className={styles['content-end']}>
                <div className={styles['icon-wrapper']} data-tooltip="Gallery">
                    <FontAwesomeIcon icon={faStore} size="2x" style={{ cursor: 'pointer' }} />
                </div>
                <span>|</span>
                <div className={styles['icon-wrapper']} data-tooltip="Notifications">
                    <FontAwesomeIcon icon={faBell} size="2x" style={{ cursor: 'pointer' }} />
                </div>
                <span>|</span>
                <div className={styles['icon-wrapper']} data-tooltip="Shopping Cart">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" style={{ cursor: 'pointer' }} />
                </div>
                <span>|</span>
                <div className={styles['icon-wrapper']} data-tooltip="Settings">
                    <FontAwesomeIcon icon={faUserCog} size="2x" style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </header>
    );
};

export default Header;
