import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Transition from "../../../../components/Transition/Transition"
import BtnLink from "../../../../components/Button/Button"
import styles from '../Register.module.css'

const ClientRegister: React.FC = () => {
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
            <div className={`${styles.register}`}>
                <div className={`${styles.back}`}>
                    <i className="fas fa-arrow-left"></i>
                    <Link to="/register">Go back</Link>
                </div>

                <div className={`${styles.methods}`}>
                    <img src="/assets/logos/google.svg" alt="Google Logo" />
                    <img src="/assets/logos/facebook.svg" alt="Facebook Logo" />
                    <img src="/assets/logos/linkedin.svg" alt="Linkedin Logo" />
                </div>

                <form className={`${styles.form}`} onSubmit={validatePasswords}>
                    <i className={`${styles.border}`} style={{ "--color": "#8c09ff5f" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#550cf377" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#e43bc85e" } as React.CSSProperties}></i>
                    <h1>Become a Client</h1>
                    <div className={`${styles.optionals}`}>
                        <div className={`${styles["form-field"]}`}>
                            <label>First Name</label>
                            <input type="text" placeholder="Enter your first name..." id="firstName" name="firstName" maxLength={30} />
                        </div>

                        <div className={`${styles["form-field"]}`}>
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter your last name..." id="lastName" name="lastName" maxLength={30} />
                        </div>
                    </div>

                    <div className={`${styles["form-field"]}`}>
                        <label>Username<span>*</span></label>
                        <input type="text" placeholder="Enter your username..." id="username" name="username" maxLength={30} required />
                    </div>

                    <div className={`${styles["form-field"]}`}>
                        <label>Email<span>*</span></label>
                        <input type="email" placeholder="Enter your email..." id="email" maxLength={40} name="email" required />
                    </div>

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
                        <BtnLink text="Register" type="submit" />
                    </div>

                    <p>Already have an account? <Link to="/login">Log in</Link></p>
                </form>
            </div>
        </Transition>
    );
}

export default ClientRegister;