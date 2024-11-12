import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnLink from '../../components/Button/Button'
import styles from './Register.module.css'

function Register() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const validatePasswords = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
        }
    };

    return (
        <div className={`${styles.register}`}>
            <form className={`${styles.form}`} onSubmit={validatePasswords}>
                <h1>Register as a Client</h1>
                <div className={`${styles.optionals}`}>
                    <div className={`${styles["form-field"]}`}>
                        <label>First Name <span>*optional</span></label>
                        <input type="text" placeholder="Enter your first name..." id="firstName" name="firstName" maxLength='30' />
                    </div>

                    <div className={`${styles["form-field"]}`}>
                        <label>Last Name <span>*optional</span></label>
                        <input type="text" placeholder="Enter your last name..." id="lastName" name="lastName" maxLength='30' />
                    </div>
                </div>

                <div className={`${styles["form-field"]}`}>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username..." id="username" name="username" maxLength='30' required />
                </div>

                <div className={`${styles["form-field"]}`}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email..." id="email" maxLength='40' name="email" required />
                </div>

                <div className={`${styles["form-field"]}`}>
                    <label>Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        required />
                </div>

                <div className={`${styles["form-field"]}`}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your password..."
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required />
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                </div>

                <div className={`${styles.submit}`}>
                    <BtnLink text="Register" type="submit" />
                </div>

                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </form>
        </div>
    );
}

export default Register;