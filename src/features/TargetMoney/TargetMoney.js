import React from "react";
// import { Button } from "../../Components/";
import { connect } from "react-redux";
import FlagMonetaryCountryUnit from "../../Components/FlagMonetaryCountryUnit";
import { v4 as uuidv4 } from "uuid";

import { setOrginalForm } from "../../redux/actions";

const TargetMoney = ({
  dataRates,
  inputOriginalValue,
  seletedCountries,
  setOrginalForm,
}) => {
  const _handleOnClick = (seletedCountry, countryCode) => {
    console.log("OUTPUT: _handleOnClick -> countryCode", countryCode);
    console.log("OUTPUT: _handleOnClick -> seletedCountry", seletedCountry);
    setOrginalForm(seletedCountry, countryCode);
  };

  const _handleExchange = (countryCodeTarget) => {
    if (!dataRates[countryCodeTarget]) {
      return null;
    } else {
      const convertedAmount = inputOriginalValue * dataRates[countryCodeTarget];
      return convertedAmount.toFixed(2);
    }
  };

  return (
    <>
      {seletedCountries.length > 0 ? (
        seletedCountries.map((seletedCountry) => {
          const countryCode = seletedCountry.substring(0, 3);
          return (
            <div key={uuidv4()} className={`block_wrapper targetBlock`}>
              <div className="Card__title">
                <button
                  onClick={() => _handleOnClick(seletedCountry, countryCode)}
                  className="btn switch_to_currentBlock"
                >
                  ⇅
                </button>
                {/* deo hieu sao them vao thi toggle thanh toggle currency modal
                <Button
                  btnType="switch_to_currentBlock"
                  handleOnClick={_handleOnClick()}
                /> */}
                <FlagMonetaryCountryUnit
                  titleMonetary={seletedCountry}
                  countryCode={countryCode}
                />
              </div>
              <div className="Card__show_value">
                {countryCode} {_handleExchange(countryCode)}
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
  console.log("OUTPUT: mapStateToProps -> state", state);
  return {
    dataRates: state.appReducers.dataRates,
    inputOriginalValue: state.appReducers.inputOriginalValue,
    seletedCountries: state.appReducers.seletedCountries,
  };
};
const mapDispatchToProps = {
  setOrginalForm,
};
export default connect(mapStateToProps, mapDispatchToProps)(TargetMoney);
