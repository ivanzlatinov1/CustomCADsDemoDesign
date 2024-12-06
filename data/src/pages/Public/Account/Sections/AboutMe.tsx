import React, { useState, useEffect } from "react";
import BtnLink from "../../../../components/Button/Button"
import styles from "../Account.module.css"

const AboutMe: React.FC = () => {
    const [language, setLanguage] = useState<string>("English");
    const [username, setUsername] = useState<string>("CustomCADs");
    const [role, setRole] = useState<string>("Guest");
    const [email, setEmail] = useState<string>("cuastomcads@example.com");

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
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
                    <BtnLink text="Change Username" onClick={() => alert("Feature to change email coming soon!")} />
                </div>
                <div className={styles.role}>
                    <h2>Role</h2>
                    <p>{role}</p>
                </div>
                <div>
                    <h2>Member since</h2>
                    <p>10/12/2024</p>
                </div>
                <div className={`${styles.pic}`}>
                    <img src="/assets/images/profile.png" alt="" />
                </div>
            </div>

            <div className={styles.section}>
                <h2>Email</h2>
                <p>{email}</p>
                <BtnLink text="Verify" />
            </div>

            <div className={styles.section}>
                <h2>Choose Default Language:</h2>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                </select>
            </div>
        </>
    );
}

export default AboutMe;