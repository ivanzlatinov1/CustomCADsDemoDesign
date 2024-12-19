import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Search.module.css"
import categoriesData from './Information/Category.json'
import statusData from './Information/Statuses.json'
import sortingData from './Information/Sorting.json'
import customSorting from './Information/CustomSorting.json'
import { color } from "framer-motion";

const Search3DModels: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [isHovered, setIsHovered] = useState(false);
    const [isActiveCategory, setIsActiveCategory] = useState(false);
    const [isActiveSort, setIsActiveSort] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Select Category");
    const [selectedSort, setSelectedSort] = useState("Sort By");
    const [isActiveStatus, setIsActiveStatus] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("Select Status");
    const [isDescending, setIsDescending] = useState(false);
    const location = useLocation();

    const toggleDropdown = () => {
        setIsActiveCategory((prev) => !prev);
    };

    const handleOptionClick = (categoryName: string) => {
        setSelectedCategory(categoryName);
        setIsActiveCategory(false);
    };

    const toggleSortDropdown = () => {
        setIsActiveSort((prev) => !prev);
    };

    const handleSortClick = (categoryName: string) => {
        setSelectedSort(categoryName);
        setIsActiveSort(false);
    };

    const toggleStatusDropdown = () => {
        setIsActiveStatus((prev) => !prev);
    };

    const handleStatusClick = (status: string) => {
        setSelectedStatus(status);
        setIsActiveStatus(false);
    };

    const toggleOrder = () => {
        setIsDescending((prev) => !prev);
    };

    const currentSortingData = location.pathname === "/custom-models" ? customSorting : sortingData;

    return (
        <div className={styles.container}>

            <div className={`${styles.menu}`}>
                <div
                    className={`${styles["select-btn"]} ${isActiveCategory ? styles.active : ""}`}
                    onClick={toggleDropdown}
                >
                    <span className={`${styles.category}`}>{selectedCategory}</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <ul className={`${styles.list}`}>
                    {categoriesData.map((category) => (
                        <li
                            key={category.id}
                            value={category.id}
                            className={`${styles.option}`}
                            style={{ '--i': category.id + 1 } as React.CSSProperties}
                            onClick={() => handleOptionClick(category.name)}
                        >
                            <span
                                dangerouslySetInnerHTML={{ __html: category.icon }}
                            ></span>
                            <span className={`${styles.name}`}>{category.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div onMouseEnter={() => setIsHovered(true)} className={`${styles.search} ${isHovered ? styles.covered : ""}`}>
                <input
                    type="text"
                    placeholder="Search for a 3D model"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}

                    className={`${styles.searchInput}`}
                />
                <a href="#"><i className="fas fa-search"></i></a>
            </div>

            {location.pathname === "/custom-models" && (
                <div className={`${styles.menu}`}>
                    <div
                        className={`${styles["select-btn"]} ${isActiveStatus ? styles.active : ""}`}
                        onClick={toggleStatusDropdown}
                    >
                        <span className={`${styles.category}`}>{selectedStatus}</span>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <ul className={`${styles.list}`}>
                        {statusData.map((status) => (
                            <li
                                key={status.id}
                                value={status.id}
                                className={`${styles.option}`}
                                style={{ '--i': status.id + 1 } as React.CSSProperties}
                                onClick={() => handleStatusClick(status.name)}
                            >
                                <span className={`${styles.name}`} style={{ marginLeft: '10px' }}>{status.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className={`${styles.menu}`}>
                <div
                    className={`${styles["select-btn"]} ${isActiveSort ? styles.active : ""}`}
                    onClick={toggleSortDropdown}
                >
                    <span className={`${styles.sort}`}>{selectedSort}</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <ul className={`${styles.list}`}>
                    {currentSortingData.map((type) => (
                        <li
                            key={type.id}
                            value={type.id}
                            className={`${styles.option}`}
                            style={{ '--i': type.id + 1 } as React.CSSProperties}
                            onClick={() => handleSortClick(type.name)}
                        >
                            <span
                                dangerouslySetInnerHTML={{ __html: type.icon }}
                            ></span>
                            <span className={`${styles.name}`}>{type.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={styles.arrows}
                style={location.pathname === "/custom-models" ? { height: '55px' } : undefined}
            >
                <div
                    className={`${styles.tooltip} ${!selectedSort || selectedSort === "Sort By" ? styles.disabled : ""}`}
                    onClick={() => {
                        if (selectedSort && selectedSort !== "Sort By") {
                            toggleOrder();
                        }
                    }}
                    data-tooltip={
                        !selectedSort || selectedSort === "Sort By"
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

export default Search3DModels;
