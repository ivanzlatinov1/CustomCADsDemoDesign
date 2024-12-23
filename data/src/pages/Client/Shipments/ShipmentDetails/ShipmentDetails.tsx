import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Transition from "../../../../components/Transition/Transition";
import BtnLink from "../../../../components/Button/Button";
import styles from "./ShipmentDetails.module.css";

interface Shipment {
    id: number;
    date: string;
    status: string;
    address: string;
    country: string;
    city: string;
    phone: string;
    email: string;
}

interface LocationState {
    shipment?: Shipment;
}

const ShipmentDetails: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state as LocationState | undefined;

    const shipment = state?.shipment;

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!shipment) {
            navigate("/shipments");
        }
    }, [shipment, navigate]);

    if (!shipment) {
        return null;
    }

    const getStatusColor = () => {
        switch (shipment.status) {
            case 'Pending':
                return styles.pending;
            case 'Picked Up':
                return styles.picked;
            case 'Delivered':
                return styles.delivered;
            default:
                return '';
        }
    };

    return (
        <Transition>
            <div className={styles.container}>
                <div className={styles.form}>
                    <h1>Shipment #{shipment.id}</h1>
                    <div className={styles.info}>
                        <p><strong>Date:</strong> {shipment.date}</p>
                        <p className={getStatusColor()}><strong>Status:</strong> {shipment.status}</p>
                        <p><strong>Address:</strong> {shipment.address}</p>
                        <p><strong>Country:</strong> {shipment.country}</p>
                        <p><strong>City:</strong> {shipment.city}</p>
                        <p><strong>Phone:</strong> {shipment.phone}</p>
                        <p><strong>Email:</strong> {shipment.email}</p>
                    </div>
                    <div className={styles.buttons}>
                        <BtnLink text="Go Back" onClick={() => navigate(-1)} />
                        <BtnLink text="Cancel Shipment" link="" />
                        <BtnLink text="Edit" link="" />
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default ShipmentDetails;
