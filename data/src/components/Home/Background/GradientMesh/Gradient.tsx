import React from 'react';
import styles from './Gradient.module.css'

const Gradient: React.FC = () => {
    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.box}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Gradient;