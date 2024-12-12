import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./ProductInfo.module.css"

const ProductInfo: React.FC = () => {
    const [buyingDetails, setBuyingDetails] = useState(false);
    const [showCartMessage, setShowCartMessage] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const { model } = location.state || {};

    const toggleBuyingDetails = () => {
        setBuyingDetails(prevState => !prevState)
    }

    const addToCart = () => {
        setBuyingDetails(false);
        setShowCartMessage(true);

        setTimeout(() => {
            setShowCartMessage(false);
        }, 3000);
    };

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
        };

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
                                {/* 3D Model */}
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
                <h1>Choose your buying preference</h1>
                <div className={`${styles.buttons}`}>
                    <button onClick={addToCart}>
                        <span>ONLY DIGITAL</span>
                    </button>
                    <button onClick={addToCart}>
                        <span>DIGITAL & PRINTED</span>
                    </button>
                </div>

                <hr />
                
                <div className={`${styles.notes}`}>
                    <p><strong>*Digital</strong> - receive the selected 3D model on a file. No delivery, no extra payment.</p>
                    <p><strong>*Printed</strong> - receive a physical copy of the selected 3D model delivered to your location in no time!</p>
                </div>
            </div>

            {showCartMessage && (
                <div className={styles.cartMessage}>
                    <p>Item added to cart!</p>
                </div>
            )}
        </>
    );
};

export default ProductInfo;