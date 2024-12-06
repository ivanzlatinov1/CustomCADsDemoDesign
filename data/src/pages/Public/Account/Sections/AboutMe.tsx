import React, { useState, useEffect } from "react";
import BtnLink from "../../../../components/Button/Button"
import styles from "../Account.module.css"

const languages = [
    { id: 1, name: "English" },
    { id: 2, name: "Bulgarian" },
    { id: 3, name: "French" },
    { id: 4, name: "Spanish" }
]

const AboutMe: React.FC = () => {
    const [language, setLanguage] = useState<string>("English");
    const [isActiveLanguage, setIsActiveLanguage] = useState(false);
    const [username, setUsername] = useState<string>("CustomCADs");
    const [role, setRole] = useState<string>("Guest");

    const handleLanguageChange = (name: string) => {
        setLanguage(name);
        setIsActiveLanguage(false);
    };

    const toggleLanguageDropdown = () => {
        setIsActiveLanguage((prev) => !prev);
    };

    useEffect(() => {
        const storedRole = localStorage.getItem("selectedRole");
        setRole(storedRole || "Con");
    }, []);

    return (
        <>
            <div className={styles.section}>
                <div className={styles.username}>
                    <h2>Username</h2>
                    <p>{username}</p>
                    <button>Change Username</button>
                </div>
                <div className={styles.role}>
                    <h2>Role</h2>
                    <p>{role}</p>
                </div>
                <div>
                    <h2>Member since</h2>
                    <p>10/12/2024</p>
                </div>
                <div className={`${styles.pic}`}><div className={`${styles.change}`}>Change picture</div></div>
            </div>

            <div className={styles.section} style={{marginTop: '20px'}}>
                <h2>Choose default Language</h2>
                <div className={`${styles.menu}`}>
                    <div
                        className={`${styles["select-btn"]} ${isActiveLanguage ? styles.active : ""}`}
                        onClick={toggleLanguageDropdown}
                    >
                        <span className={`${styles.language}`}>{language}</span>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <ul className={`${styles.list}`}>
                        {languages.map((type) => (
                            <li
                                key={type.id}
                                value={type.id}
                                className={`${styles.option}`}
                                style={{ '--i': type.id + 1 } as React.CSSProperties}
                                onClick={() => handleLanguageChange(type.name)}
                            >
                                <span className={`${styles.name}`}>{type.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AboutMe;