import { useState, useEffect } from "react";
import Transition from "../../../components/Transition/Transition";
import CartsSort from "./components/Sorting/CartsSearch";
import Cart from "./components/Cart/Cart";
import Pagination from "../../../pages/Public/Gallery/components/Pagination/Pagination";
import styles from "./Carts.module.css";


const Carts: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 20;
    const itemsPerPage = 4;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Transition>
            <div className={styles.container}>
                <h1>Your Carts</h1>
                <div className={styles.sorting}>
                    <CartsSort />
                </div>
                <div className={styles.content}>
                    <Cart number={101020} date="20-10-2024" totalPrice={40.90} status="Pending" itemsCount={3} />
                    <Cart number={101030} date="21-10-2024" totalPrice={10.80} status="Pending" itemsCount={2} />
                    <Cart number={101050} date="10-10-2024" totalPrice={7.99} status="Purchased" itemsCount={1} />
                    <Cart number={101050} date="01-10-2024" totalPrice={9.99} status="Purchased" itemsCount={1} />
                </div>
                <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} onPageChange={handlePageChange} />
            </div>
        </Transition>
    );
};

export default Carts;
