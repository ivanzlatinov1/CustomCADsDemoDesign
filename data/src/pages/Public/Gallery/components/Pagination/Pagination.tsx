import React, { useState } from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${styles.pageBtn} ${i === currentPage ? styles.active : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={styles.paginationContainer}>
      <button className={styles.prevBtn} onClick={handlePrevClick} disabled={currentPage === 1}>
        <div className={`${styles["button-top"]}`}>
          <span className={`${styles["material-icons"]}`}>❮</span>
        </div>
        <div className={`${styles["button-bottom"]}`}></div>
        <div className={`${styles["button-base"]}`}></div>
      </button>
      {renderPageNumbers()}
      <button className={styles.nextBtn} onClick={handleNextClick} disabled={currentPage === totalPages}>
        <div className={`${styles["button-top"]}`}>
          <span className={`${styles["material-icons"]}`}>❯</span>
        </div>
        <div className={`${styles["button-bottom"]}`}></div>
        <div className={`${styles["button-base"]}`}></div>
      </button>
    </div>
  );
};

export default Pagination;
