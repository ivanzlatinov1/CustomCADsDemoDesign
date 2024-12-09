import React, { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "../Account.module.css";

const languages = [
    { id: 1, name: "English", icon: `<span class="fi fi-gb"></span>` },
    { id: 2, name: "Bulgarian", icon: `<span class="fi fi-bg"></span>` },
    { id: 3, name: "French", icon: `<span class="fi fi-fr"></span>` },
    { id: 4, name: "Spanish", icon: `<span class="fi fi-es"></span>` }
];

const AboutMe: React.FC = () => {
    const [language, setLanguage] = useState<string>("English");
    const [icon, setIcon] = useState<string>(`<span class="fi fi-gb"></span>`);
    const [isActiveLanguage, setIsActiveLanguage] = useState(false);
    const [username, setUsername] = useState<string>("CustomCADs");
    const [role, setRole] = useState<string>("Guest");
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [newUsername, setNewUsername] = useState<string>("");

    const handleLanguageChange = (name: string) => {
        setLanguage(name);
        if (name === "English") {
            setIcon(`<span class="fi fi-gb"></span>`);
        } else if (name === "Bulgarian") {
            setIcon(`<span class="fi fi-bg"></span>`);
        } else if (name === "French") {
            setIcon(`<span class="fi fi-fr"></span>`);
        } else {
            setIcon(`<span class="fi fi-es"></span>`);
        }
        setIsActiveLanguage(false);
    };

    const toggleLanguageDropdown = () => {
        setIsActiveLanguage((prev) => !prev);
    };

    const handleEditUsername = () => {
        setIsEditingUsername(true);
        setNewUsername(username);
    };

    const handleSaveUsername = () => {
        if (newUsername.trim()) {
            setUsername(newUsername);
            setIsEditingUsername(false);
        }
    };

    const handleCancelEdit = () => {
        setIsEditingUsername(false);
        setNewUsername("");
    };

    useEffect(() => {
        const storedRole = localStorage.getItem("selectedRole");
        setRole(storedRole || "Con");
    }, []);

    return (
        <>
            <div className={styles.section}>
                <div className={styles.username}>
                    <h2>Username:</h2>
                    {!isEditingUsername ? (
                        <p>{username}</p>
                    ) : (
                        <div className={styles.edit}>
                            <input
                                type="text"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                                className={styles.usernameInput}
                            />
                            <button onClick={handleSaveUsername} className={styles.saveButton}>
                                Save
                            </button>
                            <button onClick={handleCancelEdit} className={styles.cancelButton}>
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
                <div className={styles.role}>
                    <h2>Role:</h2>
                    <p>{role}</p>
                </div>
                <div className={`${styles.member}`}>
                    <h2>Member since:</h2>
                    <p>10/12/2024</p>
                </div>
                <div className={`${styles.pic}`}>
                    <div className={`${styles.change}`}>Change picture</div>
                </div>
            </div>

            <div className={`${styles.section} ${styles.languages}`} style={{ marginTop: "20px" }}>
                <h2>Choose default Language</h2>
                <div className={`${styles.menu}`}>
                    <div
                        className={`${styles["select-btn"]} ${isActiveLanguage ? styles.active : ""}`}
                        onClick={toggleLanguageDropdown}
                    >
                        <span className={`${styles.language}`}>
                            <span dangerouslySetInnerHTML={{ __html: icon }}></span>
                            {language}
                        </span>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <ul className={`${styles.list}`}>
                        {languages.map((type) => (
                            <li
                                key={type.id}
                                value={type.id}
                                className={`${styles.option}`}
                                style={{ "--i": type.id + 1 } as React.CSSProperties}
                                onClick={() => handleLanguageChange(type.name)}
                            >
                                <span
                                    dangerouslySetInnerHTML={{ __html: type.icon }}
                                ></span>
                                <span className={`${styles.name}`}>{type.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`${styles.buttons}`}>
                {!isEditingUsername && (
                    <button onClick={handleEditUsername}>Change Username</button>
                )}
                <button>Save Changes</button>
            </div>
        </>
    );
};

export default AboutMe;
