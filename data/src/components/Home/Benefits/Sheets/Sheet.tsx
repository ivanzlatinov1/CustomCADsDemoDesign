import React from 'react';
import styles from './Sheet.module.css'

interface SheetProps {
    title: string;
    icon: string;
    details: string;
 }

const Sheet: React.FC<SheetProps> = ({ title, icon, details }) => {
    return (
        <div className={`${styles.sheet}`}>
            <i className={icon}></i>
            <div className={`${styles.text}`}>
                <div className={`${styles.title}`}>
                    {title}
                </div>
                <div className={`${styles.details}`}>
                    {details}
                </div>
            </div>
        </div>
    );
}

export default Sheet;