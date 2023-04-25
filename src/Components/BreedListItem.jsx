import React from "react";
import styles from "./BreedListItem.module.css";
import { useState } from "react";
import BreedListItemModal from "./BreedListItemModal";

const BreedListItem = (props) => {
  const [showBreedListItemModal, setShowBreedListItemModal] = useState(false);
  const [breedData, setBreedData] = useState([]);

  const getBreedData = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "&breed_ids=" + props.id
    );
    const cat = await res.json();
    setBreedData(cat);
    setShowBreedListItemModal(true);
  };

  return (
    <>
      {showBreedListItemModal && (
        <BreedListItemModal
          breedData={breedData}
          setShowBreedListItemModal={setShowBreedListItemModal}
        />
      )}
      <div className={styles.breed} onClick={() => getBreedData()}>
        {props.name}
      </div>
    </>
  );
};

export default BreedListItem;
