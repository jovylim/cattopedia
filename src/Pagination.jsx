import React from "react";
import { usePagination, DOTS } from "./usePagination";
import classnames from "classnames";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 3,
    currentPage,
    pageSize,
    className,
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
    <ul
      className={classnames(`${styles.paginationContainer}`, {
        [className]: className,
      })}
    >
      <li className={styles.paginationItem} onClick={onPrevious}>
        <div>{"<"}</div>
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
              [`${styles.selected}`]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li className={styles.paginationItem} onClick={onNext}>
        <div>{">"}</div>
      </li>
    </ul>
  );
};

export default Pagination;
