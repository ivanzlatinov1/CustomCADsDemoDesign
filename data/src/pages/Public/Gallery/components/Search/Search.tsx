import React, { useState } from "react";
import styles from "./Search.module.css"
import categoriesData from './Information/Category.json'
import sortingData from './Information/Sorting.json'

const Search3DModels: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("UploadDate");
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isActiveCategory, setIsActiveCategory] = useState(false);
    const [isActiveSort, setIsActiveSort] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Select Category");
    const [selectedSort, setSelectedSort] = useState("Sort By");

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
        setSelectedCategory(categoryName);
        setIsActiveSort(false);
    };

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

            <div className={`${styles.menu}`}>
                <div
                    className={`${styles["select-btn"]} ${isActiveSort ? styles.active : ""}`}
                    onClick={toggleSortDropdown}
                >
                    <span className={`${styles.sort}`}>{selectedSort}</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <ul className={`${styles.list}`}>
                    {sortingData.map((type) => (
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
        </div>
    );
};

export default Search3DModels;
