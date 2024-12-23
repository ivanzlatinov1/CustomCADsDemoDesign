import React, { useState } from "react";
import sorting from "./Sorting.json";
import styles from "../../Carts/components/Sorting/Sorting.module.css"

const ShipmentSort: React.FC = () => {
    const [isActiveSort, setIsActiveSort] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Order By");
    const [isDescending, setIsDescending] = useState(false);

    const toggleSortDropdown = () => {
        setIsActiveSort((prev) => !prev);
    };

    const handleSortClick = (categoryName: string) => {
        setSelectedSort(categoryName);
        setIsActiveSort(false);
    };

    const toggleOrder = () => {
        setIsDescending((prev) => !prev);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.menu}`}>
                <div
                    className={`${styles["select-btn"]} ${isActiveSort ? styles.active : ""}`}
                    onClick={toggleSortDropdown}
                >
                    <span className={`${styles.sort}`}>{selectedSort}</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <ul className={`${styles.list}`}>
                    {sorting.map((type) => (
                        <li
                            key={type.id}
                            value={type.id}
                            className={`${styles.option}`}
                            style={{ '--i': type.id + 1 } as React.CSSProperties}
                            onClick={() => handleSortClick(type.name)}
                        >
                            <i className={type.icon}></i>
                            <span className={`${styles.name}`}>{type.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.arrows}>
                <div
                    className={`${styles.tooltip} ${!selectedSort || selectedSort === "Order By" ? styles.disabled : ""
                        }`}
                    onClick={() => {
                        if (selectedSort && selectedSort !== "Order By") {
                            toggleOrder();
                        }
                    }}
                    data-tooltip={
                        !selectedSort || selectedSort === "Order By"
                            ? "Select Sorting"
                            : isDescending
                                ? "Descending"
                                : "Ascending"
                    }
                >
                    {isDescending ? (
                        <i className="fas fa-arrow-down"></i>
                    ) : (
                        <i className="fas fa-arrow-up"></i>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShipmentSort;
