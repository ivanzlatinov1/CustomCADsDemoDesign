import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Transition from "../../../../components/Transition/Transition";
import styles from "./ShipmentDetails.module.css"

const ShipmentDetails: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { shipment } = location.state || { shipment: null };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Transition>
            <div className={styles.container}>
                <h1>Shipment Details</h1>
            </div>
        </Transition>
    );
};

export default ShipmentDetails;
