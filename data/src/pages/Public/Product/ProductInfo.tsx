import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./ProductInfo.module.css"

const ProductInfo: React.FC = () => {
    const [buyingDetails, setBuyingDetails] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const { model } = location.state || {};

    const toggleBuyingDetails = () => {
        setBuyingDetails(prevState => !prevState);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(target) &&
                !event.composedPath().includes(document.querySelector(`.${styles["buying-details"]}`) as Node)
            ) {
                setBuyingDetails(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove(styles.scroll);
        };
    }, [buyingDetails]);

    return (
        <>
            <Transition>
                <div className={`${styles.container}`}>
                    <div className={`${styles.product}`}>
                        <div className={`${styles.model}`}>
                            <div className={`${styles.visualizer}`}>
                                <h2>Model Visualizer</h2>
                            </div>
                        </div>
                        <div className={`${styles.details}`}>
                            <div className={`${styles.info}`}>
                                <h1>{model.name}</h1>
                                <p><strong>Category:</strong> {model.category}</p>
                                <p><strong>Made by:</strong> {model.author}</p>
                                <hr />
                                <p className={`${styles.desc}`}>{model.description}</p>
                                <hr />
                                <p><strong>Price:</strong> {model.price}</p>
                                <p><strong>Uploaded on:</strong> {model.upload_date}</p>
                            </div>

                            <div className={`${styles.buttons}`}>
                                <BtnLink className={`${styles.back}`} text="Customize" link="/edit-model" />
                                <BtnLink onClick={toggleBuyingDetails} className={`${styles.back}`} text="Add to Cart" />
                                <BtnLink className={`${styles.back}`} text="Go Back" link="/gallery" />
                            </div>
                            <p>*Customizing the model may reflect its price!</p>
                        </div>
                    </div>
                </div>
            </Transition >
            {buyingDetails && (
                <div className={styles.blur}></div>
            )}
            <div ref={dropdownRef} className={`${styles["buying-details"]} ${buyingDetails ? styles.show : ''}`}>
                <div className={styles.close} onClick={toggleBuyingDetails}>
                    <i className="fas fa-times"></i>
                </div>
                <h2>Choose your buying preferences!</h2>


                <hr />

            </div>
        </>
    );
}

export default ProductInfo;