import { useEffect, useState } from "react";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import ShipmentSort from "./Sort/ShipmentSort";
import Pagination from "../../../pages/Public/Gallery/components/Pagination/Pagination";
import Shipment from "./Shipment/Shipment";
import styles from "./Shipments.module.css"

const Shipments: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Transition>
            <div className={styles.container}>
                <h1>Your Shipments</h1>
                <div className={styles.sorting}>
                    <ShipmentSort />
                </div>
                <div className={styles.shipments}>
                    <Shipment id={100} date="10-10-2024" status="Pending" />
                    <Shipment id={101} date="10-12-2024" status="Picked Up" />
                    <Shipment id={102} date="30-10-2024" status="Delivered" />
                </div>
                <Pagination totalItems={12} itemsPerPage={4} onPageChange={handlePageChange} />
            </div>
        </Transition>
    );
};

export default Shipments;
