import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Transition from "../../../components/Transition/Transition"
import BtnLink from "../../../components/Button/Button"
import styles from './Login.module.css'

const Login: React.FC = () => {
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <Transition>
            <div className={`${styles.login}`}>
                <div className={`${styles.back}`}>
                    <i className="fas fa-arrow-left"></i>
                    <Link to="/register">Go back</Link>
                </div>

                <div className={`${styles.methods}`}>
                    <img src="/assets/logos/google.svg" alt="Google Logo" />
                    <img src="/assets/logos/facebook.svg" alt="Facebook Logo" />
                    <img src="/assets/logos/linkedin.svg" alt="Linkedin Logo" />
                </div>

                <form className={`${styles.form}`}>
                    <i className={`${styles.border}`} style={{ "--color": "#8c09ff5f" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#550cf377" } as React.CSSProperties}></i>
                    <i className={`${styles.border}`} style={{ "--color": "#e43bc85e" } as React.CSSProperties}></i>
                    <h1>Log In</h1>

                    <div className={`${styles["form-field"]}`}>
                        <label htmlFor="Username">Username*</label>
                        <input type="text" placeholder="Enter your username..." id="username" name="username" maxLength={30} required />
                    </div>

                    <div className={`${styles["form-field"]}`}>
                        <label htmlFor="Password">Password*</label>
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
                        <Link to="/forgot-password">Forgot your password?</Link>
                    </div>

                    <div className={`${styles.check}`}>
                        <input type="checkbox" id="check" />
                        <label htmlFor="check"><span>Remember me</span></label>

                    </div>

                    <div className={`${styles.submit}`}>
                        <BtnLink text="Submit" type="submit" />
                    </div>
                </form>
            </div>
        </Transition>
    );
}

export default Login;