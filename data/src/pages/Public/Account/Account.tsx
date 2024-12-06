import React, { useState, useEffect } from "react";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import AboutMe from "./Sections/AboutMe";
import Security from "./Sections/Security";
import MyData from "./Sections/MyData";
import styles from "./Account.module.css";

const Account: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"about" | "security" | "data">("about");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeTab]);

    const renderActiveSection = () => {
        switch (activeTab) {
            case "about":
                return <AboutMe />;
            case "security":
                return <Security />;
            case "data":
                return <MyData />;
            default:
                return null;
        }
    };

    return (
        <Transition>
            <div className={`${styles.container}`}>
                <h1>Manage Your Account</h1>
                <div className={`${styles.box}`}>
                    <div className={`${styles.choices}`}>
                        <div
                            className={`${styles.choice} ${activeTab === "about" ? styles.active : ""}`}
                            onClick={() => setActiveTab("about")}
                        >
                            About Me
                        </div>
                        <div
                            className={`${styles.choice} ${activeTab === "security" ? styles.active : ""}`}
                            onClick={() => setActiveTab("security")}
                        >
                            Security
                        </div>
                        <div
                            className={`${styles.choice} ${activeTab === "data" ? styles.active : ""}`}
                            onClick={() => setActiveTab("data")}
                        >
                            My Data
                        </div>
                    </div>
                    <div className={`${styles["box-container"]}`}>
                        {renderActiveSection()}
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default Account;
