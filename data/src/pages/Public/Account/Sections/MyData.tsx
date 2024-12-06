import React, { useState } from "react";
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
            <div className={styles.section}>
                <h3>Export Account Data</h3>
                <BtnLink text="Export Data" onClick={handleExportData} />
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