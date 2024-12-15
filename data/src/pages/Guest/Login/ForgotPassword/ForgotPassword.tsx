import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../../../components/Transition/Transition";
import BtnLink from "../../../../components/Button/Button";
import styles from "./ForgotPassword.module.css";

const ForgotPassword: React.FC = () => {
    const [showParagraph, setShowParagraph] = useState(false);

    const [formValues, setFormValues] = useState({
        email: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = "A valid email address is required.";
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
            setShowParagraph(true);
        }
    };

    return (
        <Transition>
            <div className={`${styles.container}`}>
                <form onSubmit={handleSubmit} className={`${styles.form}`}>
                    <i
                        className={`${styles.border}`}
                        style={{ "--color": "#8c09ff5f" } as React.CSSProperties}
                    ></i>
                    <i
                        className={`${styles.border}`}
                        style={{ "--color": "#550cf377" } as React.CSSProperties}
                    ></i>
                    <i
                        className={`${styles.border}`}
                        style={{ "--color": "#e43bc85e" } as React.CSSProperties}
                    ></i>
                    <img src="/favicons/favicon.svg" alt="CustomCADs" />
                    <h1>Forgot Password</h1>
                    <h3>Enter your CustomCADs account email address to receive a security code.</h3>

                    <div className={`${styles["form-field"]}`}>
                        <label htmlFor="email">Email Address</label>
                        {errors.email && <small className="error-message">{errors.email}</small>}
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            className={errors.email ? "invalid" : ""}
                        />
                    </div>

                    <div className={`${styles.submit}`}>
                        <BtnLink text="Submit" type="submit" />
                        <div className={`${styles.transitionContainer} ${showParagraph ? styles.show : ''}`}>
                            <p>A security code has been sent to your email.</p>
                            <a href="">Resend code</a>
                        </div>
                    </div>

                    <div className={`${styles.links}`}>
                        <Link to="/login">Back to login</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </form>
            </div>
        </Transition>
    );
};

export default ForgotPassword;