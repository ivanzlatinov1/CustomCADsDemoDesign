import { useNavigate } from "react-router-dom";
import styles from '../CustomModels.module.css';

interface ModelProps {
    name: string;
    img: string;
    status: string;
    price: string;
    delivery: boolean;
}

const Model: React.FC<ModelProps> = ({ name, img, status, price, delivery }: ModelProps) => {
    const navigate = useNavigate();

    const renderButtons = () => {
        switch (status) {
            case 'Pending':
            case 'Accepted':
                return (
                    <button onClick={() => navigate("/order-details")}><span>Modify Order</span></button>
                );
            case 'Begun':
                return (
                    <button onClick={() => navigate("/contact-designer")}><span>Contact Designer</span></button>
                );
            case 'Finished':
                return (
                    <>
                        <button onClick={() => navigate("/view-cad", { state: { delivery } })}>
                            <span>View CAD</span>
                        </button>
                        <button onClick={() => navigate("/cart")}><span>Buy Now</span></button>
                    </>
                );
            case 'Completed':
                return (
                    <>
                        <button><span>Download CAD</span></button>
                        <button onClick={() => navigate("/shipment-details")}><span>View Shipment</span></button>
                    </>
                );
            default:
                return null;
        }
    };

    const getStatusColor = () => {
        switch (status) {
            case 'Pending':
                return styles.pending;
            case 'Begun':
                return styles.begun;
            case 'Completed':
                return styles.completed;
            default:
                return '';
        }
    };

    return (
        <div className={styles.model}>
            <img src={img} />
            <h2>{name}</h2>
            <div className={styles.info}>
                <p>Status: <span className={getStatusColor()}>{status}</span></p>
                <p style={{ marginLeft: '50px' }}>Price: <span>{price}</span></p>
                <div className={styles.buttons}>
                    {renderButtons()}
                </div>
            </div>
        </div>
    );
};

export default Model;