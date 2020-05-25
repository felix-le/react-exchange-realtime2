import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { setShowModelCurrencies, setCloseAllModal } from "../redux/actions";
const Modal = ({
  classModal,
  titleModal,
  children,
  typeModal,
  setCloseAllModal,
}) => {
  const _handleCloseModal = () => {
    setCloseAllModal();
  };
  return (
    <div className={`${typeModal} `}>
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className={`${classModal}`}>
            <h1>{titleModal}</h1>
            <span className="isClose" onClick={() => _handleCloseModal()}>
              x
            </span>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isCurrencyModelShowing: state.appReducers.isCurrencyModelShowing,
  };
};
const mapdispatchToProps = {
  setShowModelCurrencies,
  setCloseAllModal,
};

export default connect(mapStateToProps, mapdispatchToProps)(Modal);
