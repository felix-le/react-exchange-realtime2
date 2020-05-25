import React from "react";
import { Button } from "../../Components/index";
import { connect } from "react-redux";
import { setShowModel } from "../../redux/actions";

const Header = ({ setShowModel }) => {
  const _handleEditCurrencies = () => {
    setShowModel();
  };
  const _handleSettingsAPI = () => {
    console.log("control API source");
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
  setShowModel,
};

export default connect(null, mapdispatchToProps)(Header);
