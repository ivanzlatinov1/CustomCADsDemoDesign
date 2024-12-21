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
                        navigate("/carts")
                    }
                    }
                    style={{
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px'
                    }}
                >
                    <i className="fas fa-shopping-bag"></i>

                </li>
                <span>Your Carts</span>
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
                <span>Orders</span>
            </div>
        </>
    );
}

export default ClientOptions;