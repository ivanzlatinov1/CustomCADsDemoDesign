import React from "react"
import { Link } from "react-router-dom";
import Transition from "../../../../../components/Transition/Transition"
import BtnLink from "../../../../../components/Button/Button";
import styles from "./Introduction.module.css"

interface IntroductionProps {
    setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

const Introduction: React.FC<IntroductionProps> = ({ setIsAuthorized }) => {

    const handleAuthorization = () => {
        setIsAuthorized(true);
    };

    return (
        <Transition>
            <div className={styles.container}>
                <div className={styles.introduction}>
                    <h1 className={styles.title}>Welcome to the 3D Model Gallery!</h1>
                    <p className={styles.description}>
                        Discover a curated collection of 3D models designed to inspire creativity and innovation.
                        From intricate architectural designs to detailed product visualizations,
                        our gallery showcases a wide variety of high-quality 3D assets.
                        Whether you're an artist, designer, or simply exploring, you'll find something amazing here.
                    </p>
                    <p className={styles.description}>
                        Navigate through our diverse categories to explore the finest in 3D design.
                        Each model is crafted with precision and attention to detail, ready to be appreciated
                        or integrated into your projects.
                    </p>
                    <div className={styles.authorize} onClick={handleAuthorization}>
                        <BtnLink text="Browse" link="" />
                    </div>
                    <div className={styles.privacy}>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </Transition>
    )
}

export default Introduction;