import React from "react";
import ReactDOM from "react-dom";
import styles from "./BreedErrorModal.module.css";

const Overlay = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div
          className={styles.message}
        >{`It's a cat-astrophe! The ${props.name} cat is missing!!!!`}</div>
        <div className={styles.message}>
          {`Jokes aside, since the data on this website belong to TheCatAPI, I have no control over the removal of any data. The data for the ${props.name} is no longer available. :(`}
        </div>
        <img src="/pictures/sorrycat.jpeg" className={styles.sorry}></img>
        <button
          className={styles.close}
          onClick={() => props.setShowBreedErrorModal(false)}
        >
          go look for other cats
        </button>
      </div>
    </div>
  );
};

const BreedErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          name={props.name}
          setShowBreedErrorModal={props.setShowBreedErrorModal}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default BreedErrorModal;
