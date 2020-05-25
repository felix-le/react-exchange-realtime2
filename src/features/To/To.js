import React from "react";
import { connect } from "react-redux";
import FlagMonetaryCountryUnit from "../../Components/FlagMonetaryCountryUnit";
import { v4 as uuidv4 } from "uuid";

import { setObjectForm } from "../../redux/actions";

const To = ({
  inputOriginalValue,
  faviousCountries,
  setObjectForm,
  currentObjectFrom,
}) => {
  const _handleOnClick = (faviouscountry) => {
    setObjectForm(faviouscountry);
  };

  const _handleExchange = (faviouscountry) => {
    const usdToBase = parseFloat(faviouscountry.baseRate);

    const usdToChange = parseFloat(currentObjectFrom.baseRate);

    const baseToChange = usdToBase / usdToChange;

    const convertedAmount = baseToChange * parseFloat(inputOriginalValue);

    if (isNaN(convertedAmount)) return "";
    return convertedAmount.toLocaleString("fullwide", {
      maximumFractionDigits: 2,
    });
  };
  return (
    <>
      {faviousCountries.length > 0 ? (
        faviousCountries.map((faviouscountry) => {
          return (
            <div key={uuidv4()} className={`block_wrapper targetBlock`}>
              <div className="Card__title">
                <button
                  onClick={() => _handleOnClick(faviouscountry)}
                  className="btn switch_to_currentBlock"
                >
                  ⇅
                </button>
                <FlagMonetaryCountryUnit
                  titleMonetary={faviouscountry.fullCountryName}
                  countryCode={faviouscountry.countryCode}
                />
              </div>
              <div className="Card__show_value">
                {faviouscountry.countryCode} {_handleExchange(faviouscountry)}
              </div>
            </div>
          );
        })
      ) : (
        <p>Nothing to show</p>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    faviousCountries: state.appReducers.faviousCountries,
    inputOriginalValue: state.appReducers.inputOriginalValue,
    currentObjectFrom: state.appReducers.currentObjectFrom,
  };
};
const mapDispatchToProps = {
  setObjectForm,
};
export default connect(mapStateToProps, mapDispatchToProps)(To);
