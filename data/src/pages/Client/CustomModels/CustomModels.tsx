import { useState, useEffect } from "react";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import Search3DModels from "../../../pages/Public/Gallery/components/Search/Search";
import Pagination from "../../../pages/Public/Gallery/components/Pagination/Pagination";
import Model from "./Model/Model";
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
                        <Model
                            name="Arctic Goblin"
                            img="https://i.pinimg.com/236x/28/8d/f2/288df2694b1cdb76765cb6c94b0d62bf.jpg"
                            status="Pending"
                            price="Undefined" />
                        <Model
                            name="Troll"
                            img="https://i.pinimg.com/736x/35/8e/f8/358ef8ca8ddd361ca9ba1b1a6fb47f39.jpg"
                            status="Begun"
                            price="Undefined" />
                        <Model
                            name="Medieval Dwarf"
                            img="https://i.pinimg.com/736x/f7/b3/79/f7b3793bb58dd194a070338f1339c0c6.jpg"
                            status="Completed"
                            price="$19.99" />
                    </div>
                    <div className={`${styles.btn}`}>
                        <BtnLink text="Order a Custom Model" link="/order-custom"></BtnLink>
                    </div>
                    <Pagination totalItems={12} itemsPerPage={3} onPageChange={handlePageChange} />
                </div>
            </div>
        </Transition>
    );
}

export default CustomModels;