import React from "react";
import Transition from "../../../components/Transition/Transition";
import styles from "./Login.module.css"


const Login: React.FC = () => {
    return (
        <Transition>
            <div className={`${styles.login}`}>

            </div>
        </Transition>
    );
}

export default Login;