import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../Header.module.css'

interface ContributorOptionsProps {
    handleMenuOptionClick: () => void;
}


const ContributorOptions: React.FC<ContributorOptionsProps> = ({ handleMenuOptionClick }: ContributorOptionsProps) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.item}>
                <li
                    className={styles["account-item"]}
                    onClick={() => {
                        handleMenuOptionClick()
                        navigate("/contributor/models")
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
            <div className={styles.item}>
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

export default ContributorOptions;