import React from "react";
import "./styles.scss";
const Modal = ({
  classModal,
  titleModal,
  children,
  typeModal,
  handleCloseModal,
}) => {
  return (
    <div className={typeModal}>
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className={classModal}>
            <h1>{titleModal}</h1>
            <span className="isClose" onClick={handleCloseModal}>
              x
            </span>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
