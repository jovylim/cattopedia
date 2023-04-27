import React from "react";
import styles from "./BreedListItem.module.css";
import { useState } from "react";
import BreedListItemModal from "./BreedListItemModal";
import BreedErrorModal from "./BreedErrorModal";

const BreedListItem = (props) => {
  const [showBreedListItemModal, setShowBreedListItemModal] = useState(false);
  const [showBreedErrorModal, setShowBreedErrorModal] = useState(false);
  const [breedData, setBreedData] = useState([]);

  const getBreedData = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "&breed_ids=" + props.id
    );

    if (res.status === 200) {
      const cat = await res.json();

      if (cat.length === 0) {
        setShowBreedErrorModal(true);
      } else {
        console.log("info found");
        setBreedData(cat);
        setShowBreedListItemModal(true);
      }
    }
  };

  return (
    <>
      {showBreedListItemModal && (
        <BreedListItemModal
          breedData={breedData}
          setShowBreedListItemModal={setShowBreedListItemModal}
        />
      )}

      {showBreedErrorModal && (
        <BreedErrorModal
          name={props.name}
          setShowBreedErrorModal={setShowBreedErrorModal}
        />
      )}

      <div className={styles.breed} onClick={() => getBreedData()}>
        {props.name}
      </div>
    </>
  );
};

export default BreedListItem;
