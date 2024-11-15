import React, { useState } from "react";
import { Link } from "react-router-dom"
import Transition from "../../../../components/Transition/Transition";
import BtnLink from "../../../../components/Button/Button";
import styles from "./ResetPassword.module.css"

const Login: React.FC = () => {
    const [showParagraph, setShowParagraph] = useState(false);

    const Show = (e: React.FormEvent) => {
        e.preventDefault();
        setShowParagraph(true);
    }

    return (
        <Transition>
            <div className={`${styles.container}`}>
                <form onSubmit={Show} className={`${styles.form}`}>
                    <i className={`${styles.border}`} style={{ "--color": "#8c09ff5f" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#550cf377" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#e43bc85e" } as React.CSSProperties}></i>
                    <img src="/favicons/favicon.svg" alt="CustomCADs" />
                    <h1>Reset Your Password</h1>
                    <p>Enter your CustomCADs account email address to receive a security code.</p>

                    <div className={`${styles["form-field"]}`}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" required />
                    </div>

                    <div className={`${styles.submit}`}>
                        <BtnLink text="Submit" type="submit" />
                        {showParagraph ? (
                            <>
                                <p>A security code has been sent to your email.</p>
                                <a href="">Resend code</a>
                            </>
                        ) : ''}
                    </div>

                    <div className={`${styles.links}`}>
                        <Link to="/login">Back to login</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </form>
            </div>
        </Transition>
    );
}

export default Login;