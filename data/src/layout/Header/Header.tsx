import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faImage, faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [notificationsDropdown, setNotificationsDropdown] = useState(false);

    const toggleNavVisibility = (): void => {
        const menuElement = document.querySelector(`.${styles.menu}`);
        if (menuElement) {
            menuElement.classList.toggle(styles.active);
        }
    };

    const toggleNotifications = () => {
        setNotificationsDropdown(prevState => !prevState);
    }

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
                    <Link onClick={toggleNavVisibility} to="/roles" style={{ '--i': 2 } as React.CSSProperties}><span></span>Roles</Link>
                    <Link onClick={toggleNavVisibility} to="/register" style={{ '--i': 3 } as React.CSSProperties}><span></span>Register</Link>
                    <Link onClick={toggleNavVisibility} to="/about" style={{ '--i': 4 } as React.CSSProperties}><span></span>About us</Link>
                </div>
            </div>

            <div className={styles['content-end']}>
                <div className={styles['icon-wrapper']} data-tooltip={notificationsDropdown ? null : 'Notifications'}>
                    <FontAwesomeIcon onClick={toggleNotifications} icon={faBell} size="2x" style={{ cursor: 'pointer' }} />
                    <div
                        className={`${styles['dropdown-menu']} ${notificationsDropdown ? styles.show : ''}`}
                    >
                        <ul className={styles['dropdown-list']}>
                            <li className={styles['dropdown-item']}>You have a new message</li>
                            <li className={styles['dropdown-item']}>Your profile was updated</li>
                            <li className={styles['dropdown-item']}>New comment on your post</li>
                            <li className={styles['dropdown-item']}>Someone liked your photo</li>
                            <li className={styles['dropdown-item']}>App update available</li>
                        </ul>
                    </div>
                </div>
                <span>|</span>
                <div className={styles['icon-wrapper']} data-tooltip="Gallery">
                    <Link to="/gallery"><FontAwesomeIcon icon={faImage} size="2x" style={{ cursor: 'pointer' }} /></Link>
                </div>
                <span>|</span>
                <div className={styles['icon-wrapper']} data-tooltip="Shopping Cart">
                    <Link to="/wallet"><FontAwesomeIcon icon={faShoppingCart} size="2x" style={{ cursor: 'pointer' }} /></Link>
                </div>
                <span>|</span>
                <div className={styles['icon-wrapper']} data-tooltip="Account">
                    <Link to="/account"><FontAwesomeIcon icon={faUserCog} size="2x" style={{ cursor: 'pointer' }} /></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
