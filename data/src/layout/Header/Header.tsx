import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faImage, faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [notificationsDropdown, setNotificationsDropdown] = useState(false);
    const [notificationCount, setNotificationCount] = useState(4);
    const [accountSettings, setAccountSettings] = useState(false);
    const [productCount, setProductCount] = useState(1);
    const [isEditing, setIsEditing] = useState(false);
    const [email, setEmail] = useState("user@example.com");
    const [username, setUsername] = useState("CustomCADs");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleNavVisibility = (): void => {
        const menuElement = document.querySelector(`.${styles.menu}`);
        if (menuElement) {
            menuElement.classList.toggle(styles.active);
        }
    };

    const toggleNotifications = () => {
        setNotificationsDropdown(prevState => !prevState);
    }

    const toggleAccountSettings = () => {
        setAccountSettings(prevState => !prevState);
    }

    const toggleEdit = () => {
        setIsEditing((prevState) => !prevState);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(target) &&
                !event.composedPath().includes(document.querySelector(`.${styles.account}`) as Node)
            ) {
                setNotificationsDropdown(false);
                setAccountSettings(false);
            }
        };

        if (accountSettings) {
            document.body.classList.add(styles.scroll);
        } else {
            document.body.classList.remove(styles.scroll);
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove(styles.bodyNoScroll);
        };
    }, [accountSettings]);

    return (
        <>
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
                    <div ref={dropdownRef} className={`${styles['icon-wrapper']}`} data-tooltip={notificationsDropdown ? null : 'Notifications'}>
                        <FontAwesomeIcon className={`${styles.notifications}`} onClick={toggleNotifications} icon={faBell} size="2x" style={{ cursor: 'pointer' }} />
                        <div
                            className={`${styles['dropdown-menu']} ${notificationsDropdown ? styles.show : ''}`}
                        >
                            <ul className={styles['dropdown-list']}>
                                <li className={styles['dropdown-item']}>You have a new message</li>
                                <li className={styles['dropdown-item']}>Your profile was updated</li>
                                <li className={styles['dropdown-item']}>New model was uploaded</li>
                                <li className={styles['dropdown-item']}>App update available</li>
                            </ul>
                        </div>
                        {!notificationsDropdown && notificationCount > 0 && (
                            <div className={styles.circle}>
                                {notificationCount}
                            </div>
                        )}
                    </div>
                    <span>|</span>
                    <div className={styles['icon-wrapper']} data-tooltip="Gallery">
                        <Link to="/gallery"><FontAwesomeIcon icon={faImage} size="2x" style={{ cursor: 'pointer' }} /></Link>
                    </div>
                    <span>|</span>
                    <div className={styles['icon-wrapper']} data-tooltip="Shopping Cart">
                        <Link to="/wallet"><FontAwesomeIcon icon={faShoppingCart} size="2x" style={{ cursor: 'pointer' }} /></Link>
                        {productCount > 0 && (
                            <div className={styles.circle}>
                                {productCount}
                            </div>
                        )}
                    </div>
                    <span>|</span>
                    <div className={styles['icon-wrapper']} data-tooltip="Account">
                        <FontAwesomeIcon icon={faUserCog} size="2x" onClick={toggleAccountSettings} style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </header>

            {accountSettings && (
                <>
                    <div className={styles.blur} onClick={toggleAccountSettings}></div>

                    <div className={`${styles.account} ${accountSettings ? styles.show : ''}`}>
                        <h2>Account Settings</h2>
                        <p>Here you can update your account preferences.</p>
                        <div className={styles.close} onClick={toggleAccountSettings}>
                            <i className="fas fa-times"></i>
                        </div>

                        <div className={styles.field}>
                            <label>Username:</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    className={styles.input}
                                />
                            ) : (
                                <span className={styles.value}>{username}</span>
                            )}
                        </div>

                        <div className={styles.field}>
                            <label>Email:</label>
                            {isEditing ? (
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className={styles.input}
                                />
                            ) : (
                                <span className={styles.value}>{email}</span>
                            )}
                        </div>

                        <button onClick={toggleEdit} className={styles.button}>
                            {isEditing ? "Save" : "Edit"}
                        </button>

                        <div className={`${styles.buttons}`}>
                            <button className={`${styles.button}`}>Export My Data</button>
                            <button className={`${styles.button}`}>Delete My Data</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Header;