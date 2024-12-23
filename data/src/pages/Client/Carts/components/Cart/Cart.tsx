import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnLink from "../../../../../components/Button/Button";
import styles from "../../Carts.module.css"

interface CartProps {
    number: number;
    date: string;
    totalPrice: number;
    status: string;
    itemsCount: number;
}

const Cart: React.FC<CartProps> = ({ number, date, totalPrice, status, itemsCount }: CartProps) => {
    const isPending = status == "Pending";
    const [isCartClicked, setIsCartClicked] = useState(false);
    const navigate = useNavigate();

    const viewModels = () => {
        setIsCartClicked(prev => !prev);
    }

    return (
        <div className={styles.cart}>
            <div className={`${styles.inner} ${isCartClicked ? styles.flipped : ""}`}>
                <div className={styles.front}>
                    <p>Cart #<span>{number}</span></p>
                    <div className={styles.info}>
                        <p>Date Added</p>
                        <p>{date}</p>
                    </div>
                    <div className={styles.info}>
                        <p>Total</p>
                        <p>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className={styles.info}>
                        <p>Status</p>
                        <p style={{ color: isPending ? "red" : "green" }}>{status}</p>
                    </div>
                    <div className={styles.info}>
                        <p>Quantity</p>
                        <p>{itemsCount} Item{itemsCount == 1 ? '' : 's'}</p>
                    </div>
                    <div className={styles.buttons}>
                        <BtnLink onClick={viewModels} text="View Items" />
                        {isPending ? (
                            <BtnLink text="Buy Cart" link="/cart" />
                        ) :
                            <BtnLink text="Shipment" link="/shipment-details" />}
                    </div>
                </div>
                <div className={styles.back}>
                    <i onClick={viewModels} className={`fas fa-sync fa-rotate-270 ${styles.left}`}></i>
                    <div className={styles.items}>
                        <span>|</span>
                        {Array.from({ length: itemsCount }).map((_, index) => (
                            <React.Fragment key={`item-${index}`}>
                                <div onClick={() => navigate("/details")} className={styles.item}>
                                    <p>ModelName</p>
                                    <p>${(((totalPrice / itemsCount).toFixed(2)))}</p>
                                </div>
                                <span>|</span>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className={styles.arrows}>
                        <i className="fas fa-arrow-left"></i>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
