import React from "react";
import ReactDOM from "react-dom";
import styles from "./KindaRandomCatModal.module.css";

const Overlay = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <img className={styles.pic} src={props.cat[0].url}></img>
        <button
          className={styles.close}
          onClick={() => props.setShowKindaRandomCatModal(false)}
        >
          say byebye to catto
        </button>
      </div>
    </div>
  );
};

const KindaRandomCatModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          cat={props.cat}
          setShowKindaRandomCatModal={props.setShowKindaRandomCatModal}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default KindaRandomCatModal;
