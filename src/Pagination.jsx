import React from "react";
// import { usePagination, DOTS } from "./usePagination";
import { usePagination } from "./usePagination";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={styles.paginationContainer}>
      <li className={styles.paginationItem} onClick={onPrevious}>
        <div className={styles.arrowLeft} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className={`${styles.paginationItem} ${styles.dots}`}>
              &#8230;
            </li>
          );
        }
        return (
          <li
            className={styles.paginationItem}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li className={styles.paginationItem} onClick={onNext}>
        <div className={styles.arrowRight} />
      </li>
    </ul>
  );
};

export default Pagination;
