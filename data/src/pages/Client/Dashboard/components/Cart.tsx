import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";

interface CartItemProps {
    number: number;
    date: string;
    itemsCount: number;
}

const CartItem: React.FC<CartItemProps> = ({ number, date, itemsCount }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.cart} onClick={() => navigate("/cart")}>
            <p>Cart #{number}</p>
            <span>|</span>
            <p>{date}</p>
            <span>|</span>
            <p>{itemsCount} items</p>
            <h3>View Cart</h3>
        </div>
    );
};

export default CartItem;
