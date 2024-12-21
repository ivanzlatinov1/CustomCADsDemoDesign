import React, { useState } from "react";
import styles from "./Sorting.module.css";
import sorting from "./Sorting.json";

const CartsSort: React.FC = () => {
    const [isActiveSort, setIsActiveSort] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Order By");
    const [isActiveSubSort, setIsActiveSubSort] = useState(false);
    const [selectedSubSort, setSelectedSubSort] = useState<string | null>(null);
    const [isDescending, setIsDescending] = useState(false);
    let delay = 1;

    const toggleSortDropdown = () => {
        setIsActiveSort((prev) => !prev);
    };

    const handleSortClick = (categoryName: string) => {
        setSelectedSort(categoryName);
        setIsActiveSort(false);
        setSelectedSubSort(null);
    };

    const toggleSubSortDropdown = () => {
        setIsActiveSubSort((prev) => !prev)
    }

    const handleSubSortClick = (subSortKey: string) => {
        setSelectedSubSort(subSortKey);
        setIsActiveSubSort(false);
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

            {sorting.find((item) => item.name === selectedSort)?.subIcons && (
                <div className={`${styles.menu}`}>
                    <div onClick={toggleSubSortDropdown} className={`${styles["select-btn"]} ${isActiveSubSort ? styles.active : ""}`}>
                        <span className={`${styles.sort}`}>{selectedSubSort || "Select Status"}</span>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <ul className={`${styles.list}`}>
                        {Object.entries(
                            sorting.find((item) => item.name === selectedSort)?.subIcons || {}
                        ).map(([key, iconClass]) => (
                            <li
                                key={key}
                                className={`${styles.option}`}
                                style={{ '--i': delay++ + 1 } as React.CSSProperties}
                                onClick={() => handleSubSortClick(key)}
                            >
                                <i className={iconClass as string}></i>
                                <span className={`${styles.name}`}>{key}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

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

export default CartsSort;
