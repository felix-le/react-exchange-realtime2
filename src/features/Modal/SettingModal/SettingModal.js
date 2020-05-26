import React, { useState } from "react";
import Modal from "../../../Components/Modal";
import { Button } from "../../../Components";
import { connect } from "react-redux";
import { setApiUrl, setCloseAllModal } from "../../../redux/actions";

const SettingModal = ({
  isSettingModelShowing,
  setApiUrl,
  setCloseAllModal,
}) => {
  const [url, setUrl] = useState("");
  const exchangeRateApi = {
    url: "https://open.exchangerate-api.com/v6/latest",
    key: false,
    aboutLink: "https://www.exchangerate-api.com/docs/free-exchange-rate-api",
  };
  const europeanBank = {
    url: "https://api.exchangeratesapi.io/latest",
    key: false,
    abountLink: "https://exchangeratesapi.io/",
  };
  const openExchangeRates = {
    url: "https://openexchangerates.org/api/latest.json",
    key: true,
    aboutLink: "https://docs.openexchangerates.org/",
  };

  const _handleKeyInput = (e) => {
    const { value } = e.target;
    console.log("OUTPUT: _handleKeyInput -> value", value);
  };
  const _handleSave = () => {
    if (url === exchangeRateApi.url) {
      setApiUrl(exchangeRateApi);
    } else if (url === europeanBank.url) {
      setApiUrl(europeanBank);
    } else if (url === openExchangeRates.url) {
      setApiUrl(openExchangeRates);
    }
  };

  const _handleOnChangeOption = (e) => {
    const { value } = e.target;
    setUrl(value);
  };

  return (
    <>
      <Modal
        titleModal="Setting"
        classModal="settingModal"
        typeModal={`settingModal-wrapper  ${
          isSettingModelShowing ? "isShowing" : ""
        }`}
        handleCloseModal={() => setCloseAllModal()}
      >
        <>
          <label htmlFor="settingModal__source_api">Source</label>
          <select
            id="settingModal__source_api"
            name="source_api"
            className="settingModal__item"
            onChange={(e) => _handleOnChangeOption(e)}
            value={url}
          >
            <option value="https://open.exchangerate-api.com/v6/latest">
              ExchangeRate-API (free - no key)
            </option>
            <option value="https://api.exchangeratesapi.io/latest">
              Rates from European Central Bank (free - no key)
            </option>
            <option value="https://openexchangerates.org/api/latest.json">
              Open Exchange Rates (free - key required)
            </option>
          </select>
          {url === "https://openexchangerates.org/api/latest.json" ? (
            <>
              <label htmlFor="settingModal__inputKey settingModal__item">
                Key
              </label>
              <input
                id="settingModal__inputKey"
                type="text"
                placeholder="Please inseart your key"
                onChange={_handleKeyInput}
                className="settingModal__inputKey settingModal__item"
              />
            </>
          ) : null}

          <a href={`${url}`} className="settingModal__link settingModal__item">
            Learn more about this source.
          </a>
          <div className="settingModal__btn__wrapper">
            <Button
              btnType="btn settingModal__btn"
              handleOnClick={() => setCloseAllModal()}
              btnName="Cancel"
            />{" "}
            |
            <Button
              btnType="btn settingModal__btn"
              handleOnClick={() => _handleSave()}
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
    apiRateUrl: state.appReducers.apiRateUrl,
  };
};

const mapDispatchToProps = {
  setApiUrl,
  setCloseAllModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingModal);
