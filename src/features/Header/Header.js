import React from "react";
import { Button } from "../../Components/index";
const Header = (props) => {
  const _handleSelectCurrencies = () => {
    console.log("select the current currency");
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
            handleOnClick={_handleSelectCurrencies}
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

export default Header;
