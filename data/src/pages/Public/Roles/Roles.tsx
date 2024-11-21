import React, { useEffect } from "react";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./Roles.module.css"

const Roles: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            <div className={`${styles.container}`}>
                <h1>Roles</h1>
                <h2>You have a choice of 3 roles:</h2>
                <div className={`${styles["roles-container"]}`}>
                    <div className={`${styles.contributor}`}>
                        <div className={`${styles.circle}`}></div>
                        <i className="fas fa-upload"></i>
                        <div className={`${styles.text}`}>
                            <div className={`${styles.title}`}>
                                Contributor
                            </div>
                            <div className={`${styles.details}`}>
                                As a Contributor, your primary responsibilities involve creating, uploading, managing, and selling products on the platform.
                            </div>
                        </div>
                        <div className={`${styles.btn}`}>
                            <BtnLink text="Learn more" link="/roles/contributor" />
                        </div>
                    </div>
                    <div className={`${styles.client}`}>
                        <div className={`${styles.circle}`}></div>
                        <i className="fas fa-id-badge"></i>
                        <div className={`${styles.text}`}>
                            <div className={`${styles.title}`}>
                                Client
                            </div>
                            <div className={`${styles.details}`}>
                                As a Client, you interact with a variety of pages on the platform, allowing you to browse, purchase, customize, and track your orders and deliveries.
                            </div>
                        </div>
                        <div className={`${styles.btn}`}>
                            <BtnLink text="Learn more" link="/roles/client" />
                        </div>
                    </div>
                    <div className={`${styles.designer}`}>
                        <div className={`${styles.circle}`}></div>
                        <i className="fas fa-palette"></i>
                        <div className={`${styles.text}`}>
                            <div className={`${styles.title}`}>
                                Designer
                            </div>
                            <div className={`${styles.details}`}>
                                As a Designer, your primary responsibility is to manage and interact with various pages on the platform that facilitate your design workflow and collaborate with contributors and clients.
                            </div>
                        </div>
                        <div className={`${styles.btn}`}>
                            <BtnLink text="Learn more" link="/roles/designer" />
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
}

export default Roles;