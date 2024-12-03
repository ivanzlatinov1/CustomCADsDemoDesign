import React from "react";
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

    return (
        <Transition>
            <div className={`${styles.container}`}>
                <div className={`${styles.product}`}>
                    <div className={`${styles.model}`}>
                        <img src={model.src} alt={model.name} />
                    </div>
                    <div className={`${styles.details}`}>
                        <h1>{model.name}</h1>
                        <p><strong>Category:</strong> {model.category}</p>
                        <p><strong>Author:</strong> {model.author}</p>
                        <p>{model.description}</p>
                        <p><strong>Price:</strong> {model.price}</p>
                        <p><strong>Uploaded on:</strong> {model.upload_date}</p>

                        <div className={`${styles.buttons}`}>
                            <BtnLink className={`${styles.back}`} text="Customize" link="/edit-model" />
                            <BtnLink className={`${styles.back}`} text="Add to Cart" link="/wallet" />
                            <BtnLink className={`${styles.back}`} text="Go Back" link="/gallery" />
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
}

export default ProductInfo;