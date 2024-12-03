import React from 'react';
import styles from './Figures.module.css';

const Figures: React.FC = () => {
    return (
        <div className={styles.hero}>
            <div className={styles["hero-figure"]}>
                <svg
                    className={styles.placeholder}
                    width={528}
                    height={396}
                    viewBox="0 0 528 396"
                >
                    <rect width="528" height="396" style={{ fill: 'transparent' }}></rect>
                </svg>
                <div
                    className={`${styles["hero-figure-box"]} ${styles["hero-figure-box-01"]}`}
                    data-rotation="45deg"
                ></div>
                <div
                    className={`${styles["hero-figure-box"]} ${styles["hero-figure-box-02"]}`}
                    data-rotation="-45deg"
                ></div>
                <div
                    className={`${styles["hero-figure-box"]} ${styles["hero-figure-box-03"]}`}
                    data-rotation="0deg"
                ></div>
                <div
                    className={`${styles["hero-figure-box"]} ${styles["hero-figure-box-04"]}`}
                    data-rotation="-135deg"
                ></div>
                <div className={`${styles["hero-figure-box"]} ${styles["hero-figure-box-05"]}`}>
                <img src="/favicons/favicon.svg" alt="CustomCADs" />
                </div>
                <div className={`${styles["hero-figure-box"]} ${styles["hero-figure-box-06"]}`}></div>
                <div className={`${styles["hero-figure-box"]} ${styles["hero-figure-box-07"]}`}></div>
                <div
                    className={`${styles["hero-figure-box"]} ${styles["hero-figure-box-08"]}`}
                    data-rotation="-22deg"
                ></div>
                <div
                    className={`${styles["hero-figure-box"]} ${styles["hero-figure-box-09"]}`}
                    data-rotation="-52deg"
                ></div>
                <div
                    className={`${styles["hero-figure-box"]} ${styles["hero-figure-box-10"]}`}
                    data-rotation="-50deg"
                ></div>
            </div>
        </div>
    );
};

export default Figures;
