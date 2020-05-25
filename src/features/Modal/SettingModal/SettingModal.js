import React from "react";
import Modal from "../../../Components/Modal";
import { Button } from "../../../Components";
import { connect } from "react-redux";

const SettingModal = ({ isSettingModelShowing }) => {
  const _handleCancel = () => {
    console.log("_handleCancel");
  };
  const _handleSave = () => {
    console.log("_handleSave");
  };

  return (
    <>
      <Modal
        titleModal="Setting"
        classModal="settingModal"
        typeModal={`settingModal-wrapper  ${
          isSettingModelShowing ? "isShowing" : ""
        }`}
      >
        <>
          <label htmlFor="settingModal__source_api">Source</label>
          <select
            id="settingModal__source_api"
            name="source_api"
            className="settingModal__item"
          >
            <option value="exchangeRateApi">
              ExchangeRate-API (free - no key)
            </option>
            <option value="fromECB">
              Rates from European Central Bank (free - no key)
            </option>
            <option value="openExchangeRates">
              Open Exchange Rates (free - key required)
            </option>
          </select>
          <a
            href="https://www.exchangerate-api.com/docs/free-exchange-rate-api"
            className="settingModal__link settingModal__item"
          >
            Learn more about this source.
          </a>
          <div className="settingModal__btn__wrapper">
            <Button
              btnType="btn settingModal__btn"
              handleOnClick={_handleCancel}
              btnName="Cancel"
            />{" "}
            |
            <Button
              btnType="btn settingModal__btn"
              handleOnClick={_handleSave}
              btnName="Save"
            />
          </div>
        </>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isSettingModelShowing: state.appReducers.isSettingModelShowing,
  };
};

export default connect(mapStateToProps, null)(SettingModal);
