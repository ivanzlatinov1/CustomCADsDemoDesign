import React from "react";
import styles from "./CartNavigation.module.css"

interface CartNavigationProps {
    steps: string[];
    currentStep: number;
}

const CartNavigation: React.FC<CartNavigationProps> = ({ steps, currentStep }) => {
    return (
        <div className={styles.progressContainer}>
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`${styles.step} ${
                            index < currentStep
                                ? styles.completed
                                : index === currentStep
                                ? styles.current
                                : styles.upcoming
                        }`}
                    >
                        <div className={styles.circle}>{index + 1}</div>
                        <p className={styles.stepLabel}>{step}</p>
                    </div>
                    {index < steps.length - 1 && <div className={styles.line}></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default CartNavigation;
