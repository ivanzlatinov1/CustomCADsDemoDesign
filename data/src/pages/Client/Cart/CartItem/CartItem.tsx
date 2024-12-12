import { useState } from "react";
import styles from "./CartItem.module.css"

interface CartItemProps {
    type: string;
    src: string;
}

const CartItem: React.FC<CartItemProps> = ({ type, src }: CartItemProps) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div className={styles.purchase}>
            <div className={styles.content}>
                <div>
                    <h2>{type} Purchase</h2>
                    <img src={src} alt="image" />
                </div>
                <div className={styles.data}>
                    <h3>Model name</h3>
                    <p>By author</p>
                    <div className={styles.quantity}>
                        <i className="fas fa-minus" onClick={decrementQuantity}></i>
                        <div className={styles.number}>{quantity}</div>
                        <i className="fas fa-plus" onClick={incrementQuantity}></i>
                    </div>
                    <button className={styles.btn}><span>View</span></button>
                    <p className={styles.price}>${10.99 * quantity}</p>
                    <div className={styles.bin} data-tooltip="Remove"><i className="fas fa-trash-can"></i></div>
                </div>
            </div>
            <div className={styles.blur}></div>
        </div>
    );
}

export default CartItem;