import { useState, useEffect } from "react";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import Search3DModels from "../../../pages/Public/Gallery/components/Search/Search";
import Pagination from "../../../pages/Public/Gallery/components/Pagination/Pagination";
import styles from './CustomModels.module.css'

const CustomModels: React.FC = () => {
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
                <h1>Your Custom 3D Models</h1>
                <div className={`${styles.box}`}>
                    <div className={styles.nav}>
                        <Search3DModels />
                    </div>
                    <div className={styles.models}>
                        <div className={styles.model}>
                            <img src="https://i.pinimg.com/236x/28/8d/f2/288df2694b1cdb76765cb6c94b0d62bf.jpg" />
                            <h2>Arctic Goblin</h2>
                            <p>Status: <span>Pending</span></p>
                            <p>Price: <span>Undefined</span></p>
                            <div className={styles.buttons}>
                                <button disabled><span>View</span></button>
                                <button disabled><span>Add to Cart</span></button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.btn}`}>
                        <i className="fas fa-arrow-right"></i>
                        <BtnLink text="Order a Custom Model" link="/order-custom"></BtnLink>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <Pagination totalItems={10} itemsPerPage={5} onPageChange={handlePageChange} />
                </div>
            </div>
        </Transition>
    );
}

export default CustomModels;