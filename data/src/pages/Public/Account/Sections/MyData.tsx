import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnLink from "../../../../components/Button/Button"
import styles from "../Account.module.css"

const MyData: React.FC = () => {
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const handleExportData = () => {
        alert("Account data exported successfully!");
    };

    const handleDeleteAccount = () => {
        setIsDeleting(true);
        setTimeout(() => {
            alert("Account deleted.");
            setIsDeleting(false);
        }, 2000);
    };

    return (
        <>
            <h2>Download your CustomCADs Data</h2>
            <p>You can download your CustomCADs Data and more information about your activity and purchases in the site.</p>
            <p>Learn more about the personal information we collect in our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
            <div className={styles.section}>
                <BtnLink text="Download Data" onClick={handleExportData} />
            </div>

            <div className={styles.section}>
                <h3>Delete Account</h3>
                <button
                    className={`${styles.deleteBtn} ${isDeleting ? styles.disabled : ""}`}
                    onClick={handleDeleteAccount}
                    disabled={isDeleting}
                >
                    {isDeleting ? "Deleting..." : "Delete Account"}
                </button>
            </div>
        </>
    );
}

export default MyData;