import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Account.module.css"

const Security: React.FC = () => {
    const [email, setEmail] = useState<string>("customcads@example.com");
    const navigate = useNavigate();

    return (
        <div className={`${styles.security}`}>
            <div className={styles.section}>
                <div className={`${styles.email}`}>
                    <h2>Email:</h2>
                    <p>{email}</p>
                    <button>Verify</button>
                </div>
            </div>
            
            <div className={`${styles.section} ${styles.password}`}>
                <h2>Change Your Password</h2>
                <p>For your security, we highly recommend that you choose a unique password that you don't use for any other online account.</p>
                <button onClick={() => navigate("/reset-password")}>Reset Password</button>
            </div>
            
        </div>
    );
}

export default Security;