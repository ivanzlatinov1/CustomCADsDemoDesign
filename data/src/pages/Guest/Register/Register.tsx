import React from "react";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./MainRegister.module.css"

const Register: React.FC = () => {
    return (
        <Transition>
            <div className={`${styles.container}`}>
                <h1>Register as a:</h1>
                <div className={`${styles.cards}`}>
                    <div className={`${styles.card}`}>
                        <div className={`${styles.icon}`}><i className="fa fa-user"></i></div>
                        <div className={`${styles.content}`}>
                            <h2>Client</h2>
                            <ul className={`fa-ul ${styles.list}`}>
                                <li><span className="fa-li"><i className="fa-solid fa-plus"></i></span>
                                    Can purchase 3D models from gallery
                                </li>
                                <li><span className="fa-li"><i className="fa-solid fa-plus"></i></span>
                                    Describe your model and we can make it for you
                                </li>
                                <li><span className="fa-li"><i className="fa-solid fa-plus"></i></span>
                                    Get your 3D model printed and delivered to you
                                </li>
                            </ul>
                            <BtnLink text="Register" link="/register/client" />
                        </div>
                    </div>

                    <div className={`${styles.card}`}>
                        <div className={`${styles.icon}`}><i className="fas fa-lightbulb"></i></div>
                        <div className={`${styles.content}`}>
                            <h2>Contributor</h2>
                            <ul className={`fa-ul ${styles.list}`}>
                                <li><span className="fa-li"><i className="fa-solid fa-plus"></i></span>
                                    Can upload 3D models
                                </li>
                                <li><span className="fa-li"><i className="fa-solid fa-plus"></i></span>
                                    Unique dashboard only made for contributors
                                </li>
                                <li><span className="fa-li"><i className="fa-solid fa-plus"></i></span>
                                    Special products page for models made by you
                                </li>
                            </ul>
                            <BtnLink text="Register" link="/register/contributor" />
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
}

export default Register;