import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../Header.module.css'

interface ClientOptionsProps {
    handleMenuOptionClick: () => void;
}


const ClientOptions: React.FC<ClientOptionsProps> = ({ handleMenuOptionClick }: ClientOptionsProps) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.item}>
                <li
                    className={styles["account-item"]}
                    onClick={() => {
                        handleMenuOptionClick()
                        navigate("/purchases")
                    }
                    }
                    style={{
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px'
                    }}
                >
                    <i className="fas fa-shopping-bag"></i>

                </li>
                <span>Purchases</span>
            </div>
            <div className={styles.item}>
                <li
                    className={styles["account-item"]}
                    onClick={() => {
                        handleMenuOptionClick()
                        navigate("/custom-models")
                    }
                    }
                >
                    <i className="fas fa-puzzle-piece"></i>

                </li>
                <span>Custom Models</span>
            </div>
        </>
    );
}

export default ClientOptions;