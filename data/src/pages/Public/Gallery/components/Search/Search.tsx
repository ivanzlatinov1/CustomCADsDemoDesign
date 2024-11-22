import React, { useState } from "react";
import styles from "./Search.module.css"
import categoriesData from './Category.json'

const Search3DModels: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [sortBy, setSortBy] = useState<string>("UploadDate");
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className={styles.container}>
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

                <select
                    className={styles.categorySelect}
                    onChange={(e) => setSelectedCategory(Number(e.target.value))}
                    value={selectedCategory || ""}
                >
                    <option value="">Select Category</option>
                    {categoriesData.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <select
                    className={styles.sortSelect}
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                >
                    <option value="UploadDate">Upload Date</option>
                    <option value="Alphabetical">Alphabetical</option>
                    <option value="Status">Status</option>
                    <option value="Price">Price</option>
                </select>
        </div>
    );
};

export default Search3DModels;
