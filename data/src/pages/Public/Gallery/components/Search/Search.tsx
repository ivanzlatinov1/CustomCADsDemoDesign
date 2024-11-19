import React, { useState } from "react";
import styles from "./Search.module.css"
import categoriesData from './Category.json'

const Search3DModels: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [sortBy, setSortBy] = useState<string>("UploadDate");

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchFilters}>
                <input
                    type="text"
                    placeholder="Search for 3D models"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className={styles.searchInput}
                />

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
                    <option value="CostAmount">Cost Amount</option>
                    <option value="CostCurrency">Cost Currency</option>
                </select>
            </div>
        </div>
    );
};

export default Search3DModels;
