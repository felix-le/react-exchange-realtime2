import React, { useState } from "react";
import { Modal } from "../../../Components/";
import FlagMonetaryCountryUnit from "../../../Components/FlagMonetaryCountryUnit";
import { connect } from "react-redux";
import {
  fetchRates,
  fetchMonetary,
  toggleFavouriteMonetary,
} from "../../../redux/actions";
import { v4 as uuidv4 } from "uuid";

const CurrencyModal = ({
  countryNames,
  selectedCountryCodes,
  toggleFavouriteMonetary,
}) => {
  // const [searchValue, setSearchValue] = useState("");
  const _handleOnChangeModalSearch = (e) => {
    const { value } = e.target;
    console.log("OUTPUT: _handleOnChangeModalSearch -> value", value);
    // setSearchValue(value);
  };
  const _handleFavouriteMonetary = (countryCode, country) => {
    toggleFavouriteMonetary(countryCode, country);
  };

  return (
    <>
      <Modal titleModal="Currency Modal" classModal="currencyModal">
        <>
          <input
            type="text"
            className="currencyModal__search"
            placeholder="Search currencies"
            onChange={_handleOnChangeModalSearch}
          />
          <ul className="currencyModal__list">
            {countryNames.length > 0 ? (
              countryNames.map((country) => {
                const countryCode = country.split(" ")[0];
                return (
                  <li
                    className={`currencyModal__item 
                        `}
                    key={uuidv4()}
                    onClick={() =>
                      _handleFavouriteMonetary(countryCode, country)
                    }
                  >
                    <FlagMonetaryCountryUnit
                      titleMonetary={country}
                      countryCode={countryCode}
                    />
                    {/* check ham includes */}
                    {selectedCountryCodes.indexOf(countryCode) !== -1 && (
                      <span className="selected_item">★</span>
                    )}
                  </li>
                );
              })
            ) : (
              <p>nothing to show</p>
            )}
          </ul>
        </>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCountryCodes: state.appReducers.selectedCountryCodes,
    countryNames: state.appReducers.countryNames,
  };
};
const mapDispatchToProps = {
  fetchRates,
  fetchMonetary,
  toggleFavouriteMonetary,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyModal);
