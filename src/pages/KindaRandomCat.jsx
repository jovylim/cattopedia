import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./KindaRandomCat.module.css";
import { useRef } from "react";
import KindaRandomCatModal from "../Components/KindaRandomCatModal";

const KindaRandomCat = () => {
  const [data, setData] = useState([]);
  const selectionRef = useRef();
  const [cat, setCat] = useState("");
  const [showKindaRandomCatModal, setShowKindaRandomCatModal] = useState(false);

  const getData = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/categories");
    const cat = await res.json();
    setData(cat);
  };

  useEffect(() => {
    getData();
  }, []);

  const generateCat = () => {
    let categoryID = 0;
    data.map((item) => {
      if (item.name === selectionRef.current.value) {
        categoryID = item.id;
      }
    });
    fetchCat(categoryID);
  };

  const fetchCat = async (ID) => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "&category_ids=" + ID
    );
    const temp = await res.json();
    setCat(temp);
    setShowKindaRandomCatModal(true);
  };

  return (
    <>
      {showKindaRandomCatModal && (
        <KindaRandomCatModal
          cat={cat}
          setShowKindaRandomCatModal={setShowKindaRandomCatModal}
        />
      )}
      <div className={styles.container}>
        <NavLink className={styles.home} to="/">
          back to home
        </NavLink>
        <div className={styles.selection}>
          <div>i want to see catto in....</div>
          <select ref={selectionRef}>
            {data.map((item, idx) => {
              return (
                <option key={idx} id={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <br />
          <button
            className={styles.now}
            onClick={() => {
              generateCat();
            }}
          >
            NOW!!!!!
          </button>
        </div>
      </div>
    </>
  );
};

export default KindaRandomCat;
