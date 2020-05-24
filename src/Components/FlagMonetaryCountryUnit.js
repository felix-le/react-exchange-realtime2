import React from "react";
import CurrencyFlag from "react-currency-flags";

const FlagMonetaryCountryUnit = ({ countryCode, titleMonetary }) => {
  return (
    <div className="exchange_component_title">
      <CurrencyFlag currency={countryCode} width={40} />
      <div className="monetary_code exchange_component_item">
        {titleMonetary}
      </div>
    </div>
  );
};

export default FlagMonetaryCountryUnit;

// Component 1
