import React, { useEffect } from "react";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./AboutUs.module.css"

const AboutUs: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            <div className={`${styles.container}`}>
                <h1>About us</h1>
            </div>
        </Transition>
    );
}

export default AboutUs;