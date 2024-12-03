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

  const handlePrevAllClick = () => {
    handlePageChange(1);
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleNextAllClick = () => {
    handlePageChange(totalPages);
  }

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
      <button className={styles.prevBtn} onClick={handlePrevAllClick} disabled={currentPage === 1}>
        <div className={`${styles["button-box"]}`}>
          <span className={`${styles.element}`}>
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i>
          </span>
          <span className={`${styles.element}`}>
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </button>
      <button className={styles.prevBtn} onClick={handlePrevClick} disabled={currentPage === 1}>
        <div className={`${styles["button-box"]}`}>
          <span className={`${styles.icon}`}>
            <i className="fas fa-chevron-right"></i>
          </span>
          <span className={`${styles.icon}`}>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </button>
      {renderPageNumbers()}
      <button className={styles.nextBtn} onClick={handleNextClick} disabled={currentPage === totalPages}>
        <div className={`${styles["button-box"]}`}>
          <span className={`${styles.icon}`}>
            <i className="fas fa-chevron-left"></i>
          </span>
          <span className={`${styles.icon}`}>
            <i className="fas fa-chevron-left"></i>
          </span>
        </div>
      </button>
      <button className={styles.nextBtn} onClick={handleNextAllClick} disabled={currentPage === totalPages}>
        <div className={`${styles["button-box"]}`}>
          <span className={`${styles.element}`}>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-left"></i>
          </span>
          <span className={`${styles.element}`}>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-left"></i>
          </span>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
