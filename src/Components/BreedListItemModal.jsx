import React from "react";
import ReactDOM from "react-dom";
import styles from "./BreedListItemModal.module.css";

const Overlay = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div>{JSON.stringify(props.breedData)}</div>
        <button
          className={styles.close}
          onClick={() => props.setShowBreedListItemModal(false)}
        >
          close window
        </button>
      </div>
    </div>
  );
};

const BreedListItemModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          breedData={props.breedData}
          setShowBreedListItemModal={props.setShowBreedListItemModal}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default BreedListItemModal;
