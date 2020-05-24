import React from "react";
import "./styles.scss";
export const Modal = (props) => {
  const _handleCloseModal = () => {
    console.log("_handleCloseModal");
  };
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className={`${props.classModal}`}>
          <h1>{props.titleModal}</h1>
          <span className="isClose" onClick={_handleCloseModal}>
            x
          </span>
          {props.children}
        </div>
      </div>
    </div>
  );
};
