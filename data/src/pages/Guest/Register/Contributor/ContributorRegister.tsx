import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../../../components/Transition/Transition";
import BtnLink from "../../../../components/Button/Button";
import styles from '../Register.module.css'

const ContributorRegister: React.FC = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
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

        if (!formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = "A valid email address is required.";
        }

         if (!formValues.username.trim()) {
            newErrors.username = "Username is required.";
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
                
                <form className={`${styles.form}`} onSubmit={handleSubmit}>
                    <i className={`${styles.border}`} style={{ "--color": "#8c09ff5f" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#550cf377" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#e43bc85e" } as React.CSSProperties}></i>
                    <h1>Become a Contributor</h1>
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
                        {errors.username && <small className="error-message">{errors.username}</small>}
                        <input type="text" placeholder="Enter your username..." id="username" name="username" onChange={handleChange} className={errors.username ? "invalid" : ""} />
                    </div>

                    <div className={`${styles["form-field"]}`}>
                        <label>Email<span>*</span></label>
                        {errors.email && <small className="error-message">{errors.email}</small>}
                        <input type="email" placeholder="Enter your email..." id="email" name="email" onChange={handleChange} className={errors.email ? "invalid" : ""} />
                    </div>

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
                                className={errors.password ? "invalid" : ""} />
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
                                className={errors.confirmPassword ? "invalid" : ""}
                             />
                            <span onClick={toggleConfirmPasswordVisibility} className={styles.eye}>
                                {isConfirmPasswordVisible ?
                                    <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </span>
                        </div>
                    </div>

                    <div className={`${styles.submit}`}>
                        <BtnLink text="Register" type="submit" />
                    </div>

                    
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </Transition>
    );
}

export default ContributorRegister;