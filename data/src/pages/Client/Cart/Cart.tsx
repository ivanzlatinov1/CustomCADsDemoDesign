import { useEffect } from "react";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import CartItem from "./CartItem/CartItem";
import styles from './Cart.module.css'

interface CartProps {
    onNextStep: () => void;
}

const Cart: React.FC<CartProps> = ({ onNextStep }) => {
    const quantity = 1;
    const totalItems = 2;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            <div className={styles.container}>
                <h1>Your cart</h1>
                <div className={styles.purchases}>
                    <CartItem type="Delivery" src="https://i.pinimg.com/736x/e8/d8/95/e8d8952e395e0745f96f78f67f005baa.jpg"></CartItem>
                    <CartItem type="Digital" src="https://i.pinimg.com/736x/8c/1f/9d/8c1f9d58058a448749bdf4fff3b0cec7.jpg"></CartItem>
                </div>
            </div>
            <div className={styles.options}>
                <h2>Total ({totalItems} item/s) - <span>${10.99 * quantity * totalItems}</span></h2>
                <BtnLink text="Buy Cart" onClick={onNextStep}></BtnLink>
                <hr />
                <div className={styles.cards}>
                    <i className="fab fa-cc-visa"></i>
                    <i className="fab fa-cc-mastercard"></i>
                    <i className="fab fa-google-pay"></i>
                    <i className="fab fa-apple-pay"></i>
                </div>
            </div>
        </Transition>
    );
}

export default Cart;