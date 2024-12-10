import { useState } from "react";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import styles from "./OrderCustomModels.module.css"

const OrderCustomModel: React.FC = () => {

    return (
        <Transition>
            <div className={styles.container}>
                <h1>Order a Custom Model</h1>
                <form>
                    
                </form>
            </div>
        </Transition>
    );
}

export default OrderCustomModel;