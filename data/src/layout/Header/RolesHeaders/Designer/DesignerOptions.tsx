import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../Header.module.css'

interface DesignerOptionsProps {
    handleMenuOptionClick: () => void;
}


const DesignerOptions: React.FC<DesignerOptionsProps> = ({ handleMenuOptionClick }: DesignerOptionsProps) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={`${styles.item}`}>
                <li
                    className={styles["account-item"]}
                    onClick={() => {
                        handleMenuOptionClick()
                        navigate("/designer/models")
                    }
                    }
                    style={{
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px'
                    }}
                >
                    <i className="fas fa-cube"></i>
                </li>
                <span>Your models</span>
            </div>
            <div className={`${styles.item}`}>
                <li
                    className={styles["account-item"]}
                    onClick={() => {
                        handleMenuOptionClick()
                        navigate("/sale")
                    }
                    }
                >
                    <i className="fas fa-money-bill-wave"></i>

                </li>
                <span>For sale</span>
            </div>
            <div className={`${styles.item}`}>
                <li
                    className={styles["account-item"]}
                    onClick={() => {
                        handleMenuOptionClick()
                        navigate("/upload-model")
                    }
                    }
                >
                    <i className="fas fa-puzzle-piece"></i>

                </li>
                <span>Upload a model</span>
            </div>
        </>
    );
}

export default DesignerOptions;