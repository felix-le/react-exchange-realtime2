import React, { useState } from "react";
// import { Card } from "../../Components/";
import FlagMonetaryCountryUnit from "../../Components/FlagMonetaryCountryUnit";
import { connect } from "react-redux";
import { setInputValue } from "../../redux/actions";

const From = ({ setInputValue, formOriginalValue, fullNameCountries }) => {
  const [showInput, setShowInput] = useState("");
  const [countryFrom, setCountryForm] = useState({
    fullCountryName: "USD United States Dollar",
    countryCode: "USD",
    baseRate: 1,
    isFavorite: false,
  });

  const _handleOnChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    setShowInput(value);
  };

  return (
    <div className={`block_wrapper currentBlock`}>
      <div>
        <div className="Card__title">
          <FlagMonetaryCountryUnit
            titleMonetary={countryFrom.fullCountryName}
            countryCode={countryFrom.countryCode}
          />
        </div>
        <input
          type="number"
          onChange={_handleOnChange}
          className="Card__input"
          value={showInput}
        />
        <div className="Card__show_value">
          {countryFrom.countryCode} {`${showInput}`}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formOriginalValue: state.appReducers.formOriginalValue,
    fullNameCountries: state.appReducers.fullNameCountries,
  };
};
const mapDispatchToProps = {
  setInputValue,
};
export default connect(mapStateToProps, mapDispatchToProps)(From);
