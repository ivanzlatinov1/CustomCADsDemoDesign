import React from "react";
import styles from "./Bubbles.module.css"

const Bubbles: React.FC = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.bubbles}`}>
                {[23, 8, 14, 23, 19, 38, 44, 8, 13, 22, 16, 5, 14, 33, 11, 6, 21, 19, 28, 9, 19, 20, 17, 7, 35, 16, 23, 1, 3, 14, 2, 19, 38, 44, 8, 13, 22, 16, 5, 34, 17].map((i, index) => (
                    <span key={index} style={{ "--i": i } as React.CSSProperties}></span>
                ))}
            </div>
            <div className={`${styles.blurred}`}></div>
        </div>
    );
}

export default Bubbles;
