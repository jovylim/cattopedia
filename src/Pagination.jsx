import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 3,
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
    if (currentPage !== lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={styles.paginationContainer}>
      <li
        className={classnames(`${styles.paginationItem}`, {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={styles.arrowLeft} />
      </li>
      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return (
            <li key={idx} className={`${styles.paginationItem} ${styles.dots}`}>
              &#8230;
            </li>
          );
        }
        return (
          <li
            key={idx}
            className={classnames(`${styles.paginationItem}`, {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(`${styles.paginationItem}`, {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={styles.arrowRight} />
      </li>
    </ul>
  );
};

export default Pagination;
