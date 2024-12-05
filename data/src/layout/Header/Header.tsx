import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faImage, faBell } from '@fortawesome/free-solid-svg-icons';
import ClientIcons from './RolesHeaders/ClientIcons';
import ContributorIcons from './RolesHeaders/ContributorIcons';
import DesignerIcons from './RolesHeaders/DesignerIcons';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState("Guest");
    const [isGuestSelected, setIsGuestSelected] = useState(true);
    const [isClientSelected, setIsClientSelected] = useState(false);
    const [isContributorSelected, setIsContributorSelected] = useState(false);
    const [isDesignerSelected, setIsDesignerSelected] = useState(false);
    const [notificationsDropdown, setNotificationsDropdown] = useState(false);
    const [notificationCount, setNotificationCount] = useState(4);
    const [accountSettings, setAccountSettings] = useState(false);
    const [productCount, setProductCount] = useState(1);
    const [deleteActive, setDeleteActive] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const toggleRoleVisibility = (): void => {
        const roleElement = document.querySelector(`.${styles.role}`);
        if (roleElement) {
            roleElement.classList.toggle(styles.active);
        }
    }

    const handleRoleClick = (role: string) => {
        setSelectedRole(role);
        if(role === "Guest") {
            setIsGuestSelected(true);
            setIsContributorSelected(false);
            setIsDesignerSelected(false);
            setIsClientSelected(false);
        }
        else if(role == "Client") {
            setIsGuestSelected(false);
            setIsContributorSelected(false);
            setIsDesignerSelected(false);
            setIsClientSelected(true);
        }
        else if(role === "Contributor") {
            setIsGuestSelected(false);
            setIsContributorSelected(true);
            setIsDesignerSelected(false);
            setIsClientSelected(false);
        }
        else {
            setIsGuestSelected(false);
            setIsContributorSelected(false);
            setIsDesignerSelected(true);
            setIsClientSelected(false);
        }
    };

    const toggleNavVisibility = (): void => {
        const menuElement = document.querySelector(`.${styles.menu}`);
        if (menuElement) {
            menuElement.classList.toggle(styles.active);
        }
    }

    const toggleNotifications = () => {
        setNotificationsDropdown(prevState => !prevState);
    }

    const toggleAccountSettings = () => {
        setAccountSettings(prevState => !prevState);
    }

    const handleDownload = () => {
        const randomFile = "/assets/files/AccountData";

        const link = document.createElement("a");
        link.href = randomFile;
        link.download = "AccountData.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleDelete = () => {
        setDeleteActive(true);
    }

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
                setDeleteActive(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove(styles.scroll);
        };
    }, [accountSettings, deleteActive]);

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

                <div className={styles['content-middle']}>
                <div onClick={toggleRoleVisibility} className={`${styles.role} ${isDesignerSelected ? styles.margin : ''}`}>
                        <h2>Logged as a {selectedRole}</h2>
                        <span className={styles['left-icon']}></span>
                        <span className={styles['right-icon']}></span>
                    </div>
                    <div className={styles.roles}>
                        <a  onClick={() => {
                            handleRoleClick("Guest");
                            toggleRoleVisibility();
                        }} style={{ '--i': 1 } as React.CSSProperties}><span></span>Guest</a>
                        <a  onClick={() => {
                            handleRoleClick("Client");
                            toggleRoleVisibility();
                        }} style={{ '--i': 2 } as React.CSSProperties}><span></span>Client</a>
                        <a  onClick={() => {
                            handleRoleClick("Contributor");
                            toggleRoleVisibility();
                        }} style={{ '--i': 3 } as React.CSSProperties}><span></span>Contributor</a>
                        <a  onClick={() => {
                            handleRoleClick("Designer");
                            toggleRoleVisibility();
                        }} style={{ '--i': 4 } as React.CSSProperties}><span></span>Designer</a>
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
                    {isClientSelected ? (
                        <>
                        <ClientIcons productCount={productCount} />
                        <span>|</span>
                        </>
                    ) : null}
                    {isContributorSelected ? (
                        <>
                        <ContributorIcons />
                        <span>|</span>
                        </>
                    ) : null}
                    {isDesignerSelected ? (
                        <>
                        <DesignerIcons />
                        <span>|</span>
                        </>
                    ) : null}
                    <div className={styles['icon-wrapper']} data-tooltip="Account">
                        <FontAwesomeIcon icon={faUserCog} size="2x" onClick={toggleAccountSettings} style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </header>

            {accountSettings && (
                <div className={styles.blur}></div>
            )}
            <div className={`${styles.account} ${accountSettings ? styles.show : ''}`}>
                <h2>Account Settings</h2>
                <p>Here you can update your account preferences.</p>
                <div className={styles.close} onClick={toggleAccountSettings}>
                    <i className="fas fa-times"></i>
                </div>

                <div className={styles.field}>
                    <label>Username:</label>
                    <span className={styles.value}>CustomCADs</span>
                </div>

                <div className={styles.field}>
                    <label>Email:</label>
                    <span className={styles.value}>guest@example.com</span>
                </div>

                <hr />

                <button onClick={() => {
                    setAccountSettings(false);
                    navigate("/account")
                }} className={styles.button}>
                    Manage your account
                </button>

                <div className={`${styles.buttons}`}>
                    <button onClick={handleDownload} className={`${styles.button}`}>Export My Data</button>
                    <button onClick={handleDelete} className={`${styles.button}`}>Delete My Data</button>
                </div>
            </div>

            {deleteActive && (
                <div className={styles["delete-blur"]}></div>
            )}

            <div className={`${styles.delete} ${deleteActive ? styles.show : ''}`}>
                <h1>Are you sure?</h1>
                <button onClick={() => navigate("/login")} style={{color: "red"}} className={`${styles.button}`}>Delete</button>
                <button onClick={() => setDeleteActive(false)} className={`${styles.button}`}>Go Back</button>
            </div>
        </>
    );
};

export default Header;