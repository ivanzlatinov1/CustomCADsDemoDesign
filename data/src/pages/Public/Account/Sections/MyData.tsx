import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Account.module.css"

const MyData: React.FC = () => {
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const handleExportData = () => {
        const blob = new Blob([], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "user_data.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
            <div className={`${styles.export}`}>
                <h2>Download your CustomCADs Data</h2>
                <p>You can download your CustomCADs Data and more information about your activity and purchases in the site.</p>
                <p>Learn more about the personal information we collect in our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
                <button onClick={handleExportData}>Download Data</button>
            </div>

            <div className={`${styles.section} ${styles.delete}`}>
                <h2>Delete Account Information</h2>
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