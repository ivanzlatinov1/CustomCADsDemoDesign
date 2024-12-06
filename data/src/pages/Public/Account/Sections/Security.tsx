import React, { useState, useEffect } from "react";
import BtnLink from "../../../../components/Button/Button"
import styles from "../Account.module.css"

const Security: React.FC = () => {
    const [password, setPassword] = useState<string>("");

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <div className={styles.section}>
                <h2>Your Password</h2>
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <BtnLink text="Update Password" onClick={() => alert("Password updated!")} />
            </div>
        </>
    );
}

export default Security;