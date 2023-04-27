import React from "react";
import BreedListItem from "../Components/BreedListItem";
import Pagination from "../Pagination";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./BrowseBreeds.module.css";
import { useMemo } from "react";

const BrowseBreeds = (props) => {
  const data = props.data;

  let pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const currData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <NavLink className={styles.home} to="/">
        back to home
      </NavLink>
      <br />
      {currData.map((item) => {
        return (
          <BreedListItem
            key={item.id}
            name={item.name}
            id={item.id}
          ></BreedListItem>
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default BrowseBreeds;
