import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./ProductInfo.module.css"

const ProductInfo: React.FC = () => {
    const location = useLocation();
    const { model } = location.state || {};

    if (!model) {
        return <p>Model not found!</p>;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
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
                            <p>{model.description}</p>
                            <p><strong>Price:</strong> {model.price}</p>
                            <p><strong>Uploaded on:</strong> {model.upload_date}</p>
                        </div>

                        <div className={`${styles.buttons}`}>
                            <BtnLink className={`${styles.back}`} text="Customize" link="/edit-model" />
                            <BtnLink className={`${styles.back}`} text="Add to Cart" link="/wallet" />
                            <BtnLink className={`${styles.back}`} text="Go Back" link="/gallery" />
                        </div>
                        <p>*Customizing the model may reflect its price!</p>
                    </div>
                </div>
            </div>
        </Transition >
    );
}

export default ProductInfo;