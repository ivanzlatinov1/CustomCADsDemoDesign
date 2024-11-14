import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import styles from "./Footer.module.css"

const Footer: React.FC = () => {
    const location = useLocation();
    const pathsToHide = ["/register", "/login", "/register/client", "/register/contributor"];

    if(pathsToHide.includes(location.pathname)) {
        return null;
    }

    function getLink(event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) {
        const linkElement = event.currentTarget.nextElementSibling;
    
        if (linkElement && linkElement.tagName === 'A') {
            const url = (linkElement as HTMLAnchorElement).href;
            window.open(url, '_blank');
        }
    }
    

    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles["gradient-border-top"]}`}></div>
            <div className={`${styles.content}`}>
                <div className={`${styles.info}`}>
                    <h1>&copy; 2024 CustomCADs</h1>
                    <p>Your go-to platform for custom 3D designs, pre-made models, and designer connections.</p>
                    <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                </div>
                <div className={`${styles.links}`}>
                    <div className={`${styles.contacts}`}>
                        <div className={`${styles.icon}`}>
                            <div id='1' onClick={getLink}><i className="fas fa-envelope"></i></div>
                            <a href="https://www.instagram.com/custom_cads/" target="_blank">
                                Email
                            </a>
                        </div>

                        <div className={`${styles.icon}`}>
                            <div id='2' onClick={getLink}><i className="fab fa-instagram"></i></div>
                            <a href="https://www.instagram.com/custom_cads/" target="_blank">
                                Instagram
                            </a>
                        </div>

                        <div className={`${styles.icon}`}>
                            <div id='3' onClick={getLink}><i className="fab fa-facebook"></i></div>
                            <a href="https://www.instagram.com/custom_cads/" target="_blank">
                                Facebook
                            </a>
                        </div>

                        <div className={`${styles.icon}`}>
                            <div id='4' onClick={getLink}><i className="fab fa-twitter"></i></div>
                            <a href="https://www.instagram.com/custom_cads/" target="_blank">
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;