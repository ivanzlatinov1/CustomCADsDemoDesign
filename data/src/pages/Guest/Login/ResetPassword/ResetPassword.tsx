import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../../../components/Transition/Transition";
import BtnLink from "../../../../components/Button/Button";
import styles from "./ResetPassword.module.css"

const ResetPassword: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const [formValues, setFormValues] = useState({
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formValues.password.trim()) {
            newErrors.password = "Password is required.";
        }

        if (!formValues.confirmPassword.trim() || formValues.password !== formValues.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            /*Backend Logic*/
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
                <form onSubmit={handleSubmit} className={`${styles.form}`}>
                    <i className={`${styles.border}`} style={{ "--color": "#8c09ff5f" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#550cf377" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#e43bc85e" } as React.CSSProperties}></i>
                    <img src="/favicons/favicon.svg" alt="CustomCADs" />
                    <h1>Reset Password</h1>
                    <h3>Enter a new password for your CustomCADs account.</h3>

                    <div className={`${styles["form-field"]}`}>
                        <label>Password<span>*</span></label>
                        {errors.password && <small className="error-message">{errors.password}</small>}
                        <div className={styles.passwordWrapper}>
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password..."
                                value={formValues.password}
                                onChange={handleChange}
                                name="password"
                                className={errors.password ? "invalid" : ""}
                            />
                            <span onClick={togglePasswordVisibility} className={styles.eye}>
                                {isPasswordVisible ?
                                    <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </span>
                        </div>
                    </div>

                    <div className={`${styles["form-field"]}`}>
                        <label>Confirm Password<span>*</span></label>
                        {errors.confirmPassword && <small className="error-message">{errors.confirmPassword}</small>}
                        <div className={styles.passwordWrapper}>
                            <input
                                type={isConfirmPasswordVisible ? "text" : "password"}
                                id="confirmPassword"
                                placeholder="Confirm your password..."
                                name="confirmPassword"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                                className={errors.password ? "invalid" : ""} />
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