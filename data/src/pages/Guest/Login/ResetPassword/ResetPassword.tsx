import React, {useState} from "react";
import { Link } from "react-router-dom";
import Transition from "../../../../components/Transition/Transition";
import BtnLink from "../../../../components/Button/Button";
import styles from "./ResetPassword.module.css"

const ResetPassword: React.FC = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const validatePasswords = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    return (
        <Transition>
            <div className={`${styles.container}`}>
                <form onSubmit={validatePasswords} className={`${styles.form}`}>
                    <i className={`${styles.border}`} style={{ "--color": "#8c09ff5f" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#550cf377" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#e43bc85e" } as React.CSSProperties}></i>
                    <img src="/favicons/favicon.svg" alt="CustomCADs" />
                    <h1>Reset Password</h1>
                    <h3>Enter a new password for your CustomCADs account.</h3>

                    <div className={`${styles["form-field"]}`}>
                        <label>Password<span>*</span></label>
                        <div className={styles.passwordWrapper}>
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                required />
                            <span onClick={togglePasswordVisibility} className={styles.eye}>
                                {isPasswordVisible ?
                                    <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </span>
                        </div>
                    </div>

                    <div className={`${styles["form-field"]}`}>
                        <label>Confirm Password<span>*</span></label>
                        <div className={styles.passwordWrapper}>
                            <input
                                type={isConfirmPasswordVisible ? "text" : "password"}
                                id="confirmPassword"
                                placeholder="Confirm your password..."
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required />
                            <span onClick={toggleConfirmPasswordVisibility} className={styles.eye}>
                                {isConfirmPasswordVisible ?
                                    <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </span>
                        </div>
                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    </div>

                    <div className={`${styles.submit}`}>
                        <BtnLink text="Submit" type="submit" link="/" />
                    </div>

                    <div className={`${styles.links}`}>
                        <Link to="/login">Back to login</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </form>
            </div>
        </Transition>
    )
}

export default ResetPassword;