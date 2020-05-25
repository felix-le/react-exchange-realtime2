import React from "react";
import { Button } from "../../Components/index";
import { connect } from "react-redux";
import {
  setShowModelCurrencies,
  setShowSettingModal,
} from "../../redux/actions";

const Header = ({ setShowModelCurrencies, setShowSettingModal }) => {
  const _handleEditCurrencies = () => {
    setShowModelCurrencies();
  };
  const _handleSettingsAPI = () => {
    // console.log("control API source");
    setShowSettingModal();
  };

  return (
    <>
      <div className="header-wrapper">
        <h1 className="header_title">Currency Conversion</h1>
        <div className="header__button-wrapper">
          <Button
            btnType="header__edit_cur"
            btnName="Edit Currencies"
            handleOnClick={() => _handleEditCurrencies()}
          />
          <Button
            btnType="header__settings"
            btnName="Setting"
            handleOnClick={_handleSettingsAPI}
          />
        </div>
      </div>
    </>
  );
};

const mapdispatchToProps = {
  setShowModelCurrencies,
  setShowSettingModal,
};

export default connect(null, mapdispatchToProps)(Header);
