import React from "react";
import Modal from "../../../Components/";
import FlagMonetaryCountryUnit from "../../../Components/FlagMonetaryCountryUnit";
import { connect } from "react-redux";
import {
  toggleFavouriteMonetary,
  modalSearch,
  setCloseAllModal,
} from "../../../redux/actions";
import { v4 as uuidv4 } from "uuid";

const CurrencyModal = ({
  showFullCountryNames,
  toggleFavouriteMonetary,
  modalSearch,
  isCurrencyModelShowing,
  setCloseAllModal,
}) => {
  const _handleOnChangeModalSearch = (e) => {
    const { value } = e.target;
    modalSearch(value.toLowerCase() || "");
  };
  const _handleFavouriteMonetary = (country) => {
    toggleFavouriteMonetary(country);
  };

  return (
    <>
      <Modal
        titleModal="Currency Modal"
        classModal="currencyModal"
        typeModal={`currencyModal-wrapper ${
          isCurrencyModelShowing ? "isShowing" : ""
        }`}
        handleCloseModal={() => setCloseAllModal()}
      >
        <>
          <input
            type="text"
            className="currencyModal__search"
            placeholder="Search currencies"
            onChange={_handleOnChangeModalSearch}
          />
          <ul className="currencyModal__list">
            {showFullCountryNames.length > 0 ? (
              showFullCountryNames.map((country) => {
                return (
                  <li
                    className={`currencyModal__item ${
                      country.isFavorite ? "favoritedItem" : ""
                    }`}
                    key={uuidv4()}
                    onClick={() => _handleFavouriteMonetary(country)}
                  >
                    <FlagMonetaryCountryUnit
                      titleMonetary={country.fullCountryName}
                      countryCode={country.countryCode}
                    />
                    {country.isFavorite && (
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
// Tai sao remove faviousCountries lai khong dung duoc?
const mapStateToProps = (state) => {
  return {
    showFullCountryNames: state.appReducers.showFullCountryNames,
    faviousCountries: state.appReducers.faviousCountries,
    isCurrencyModelShowing: state.appReducers.isCurrencyModelShowing,
  };
};
const mapDispatchToProps = {
  toggleFavouriteMonetary,
  modalSearch,
  setCloseAllModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyModal);
