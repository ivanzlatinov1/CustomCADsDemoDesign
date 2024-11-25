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
                    <img src={model.src} alt={model.name} />
                    <h1>{model.name}</h1>
                    <p><strong>Role:</strong> {model.role}</p>
                    <p><strong>Author:</strong> {model.author}</p>
                    <BtnLink className={`${styles.back}`} text="Go Back" link="/gallery" />
                </div>
            </div>
        </Transition>
    );
}

export default ProductInfo;