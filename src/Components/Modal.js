import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { setShowModel } from "../redux/actions";
const Modal = ({
  classModal,
  titleModal,
  children,
  isShowing,
  setShowModel,
}) => {
  return (
    <div className={`modal-overlay ${isShowing ? "isShow" : ""}`}>
      <div className="modal-wrapper">
        <div className={`${classModal}`}>
          <h1>{titleModal}</h1>
          <span className="isClose" onClick={() => setShowModel()}>
            x
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isShowing: state.appReducers.isShowing,
  };
};
const mapdispatchToProps = {
  setShowModel,
};

export default connect(mapStateToProps, mapdispatchToProps)(Modal);
