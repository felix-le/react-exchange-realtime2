import React, { useState } from "react";
// import { Card } from "../../Components/";
import FlagMonetaryCountryUnit from "../../Components/FlagMonetaryCountryUnit";
import { connect } from "react-redux";
import {
  setInputValue,
  setCurrentObject,
  setObjectForm,
} from "../../redux/actions";

const From = ({ setInputValue, changeObjectFrom, setCurrentObject }) => {
  const [showInput, setShowInput] = useState("");

  const _handleOnChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    setShowInput(value);
  };
  setCurrentObject(changeObjectFrom);

  return Object.keys(changeObjectFrom).length > 0 ? (
    <div className={`block_wrapper currentBlock`}>
      <div>
        <div className="Card__title">
          <FlagMonetaryCountryUnit
            titleMonetary={changeObjectFrom.fullCountryName}
            countryCode={changeObjectFrom.countryCode}
          />
        </div>
        <input
          type="number"
          onChange={_handleOnChange}
          className="Card__input"
          value={showInput}
        />
        <div className="Card__show_value">
          {changeObjectFrom.countryCode} {`${showInput}`}
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    changeObjectFrom: state.appReducers.changeObjectFrom,
    currentObjectFrom: state.appReducers.currentObjectFrom,
  };
};
const mapDispatchToProps = {
  setInputValue,
  setCurrentObject,
  setObjectForm,
};
export default connect(mapStateToProps, mapDispatchToProps)(From);
