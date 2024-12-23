import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BtnLink from "../../../../components/Button/Button";
import styles from '../Shipments.module.css'

interface ShipmentProps {
    id: number,
    date: string,
    status: string
}

const Shipment: React.FC<ShipmentProps> = ({ id, date, status }: ShipmentProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const shipment = {
        id: id,
        date: date,
        status: status,
        address: "51368 Dare Canyon, New Owen, MA 32230-5651",
        country: "United States",
        city: "Washington",
        phone: "(279) 667-7316 x9178",
        email: "shipmentexample@gmail.com"
    }

    const getStatusColor = () => {
        switch (status) {
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
        <div className={styles.shipment}>
            <div className={styles.id}>Shipment&nbsp;<span>&nbsp;#{id}</span></div>
            <div className={styles.info}>
                <p>Date</p>
                <p>{date}</p>
            </div>
            <div className={styles.info}>
                <p>Status</p>
                <p className={getStatusColor()}>{status}</p>
            </div>
            <div className={styles.btn}>
                <BtnLink text="View Shipment" onClick={() => navigate("/shipment-details", { state: { shipment } })} />
            </div>
        </div>
    );
};

export default Shipment;
