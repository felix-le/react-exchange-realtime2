import React, { useState } from "react";
// import { Card } from "../../Components/";
import FlagMonetaryCountryUnit from "../../Components/FlagMonetaryCountryUnit";
import { connect } from "react-redux";
import { setInputValue } from "../../redux/actions";

const CurrentMoney = ({ countryNames, setInputValue, formOriginalValue }) => {
  // const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState("");
  // const [currentCountry, setCurrentCountry] = useState("");

  const _handleOnChange = (e) => {
    const { value } = e.target;
    // console.log("OUTPUT: _handleOnChange -> e.target.value", value);
    setInputValue(value);
    setShowInput(value);
  };

  console.log("OUTPUT: CurrentMoney -> formOriginalValue", formOriginalValue);

  return (
    <div className={`block_wrapper currentBlock`}>
      {formOriginalValue.seletedOriginalCountry !== "" ? (
        <>
          <div className="Card__title">
            <FlagMonetaryCountryUnit
              titleMonetary={formOriginalValue.seletedOriginalCountry}
              countryCode={formOriginalValue.seletedOriginalcountryCode}
            />
          </div>
          <input
            type="number"
            onChange={_handleOnChange}
            className="Card__input"
            value={showInput}
          />
          <div className="Card__show_value">
            {`${countryNames[0]}`.substring(0, 3)} {`${showInput}`}
          </div>
        </>
      ) : (
        <>
          <div className="Card__title">
            <FlagMonetaryCountryUnit
              titleMonetary="USD United States Dollar"
              countryCode="USD"
            />
          </div>
          <input
            type="number"
            onChange={_handleOnChange}
            className="Card__input"
            value={showInput}
          />
          <div className="Card__show_value">
            {`${countryNames[0]}`.substring(0, 3)} {`${showInput}`}
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countryNames: state.appReducers.countryNames,
    formOriginalValue: state.appReducers.formOriginalValue,
  };
};
const mapDispatchToProps = {
  setInputValue,
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentMoney);
