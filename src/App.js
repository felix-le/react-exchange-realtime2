import React, { useEffect } from "react";
import "./app.scss";
import Header from "./features/Header";
import From from "./features/From";
// import To from "./features/To";
// import CurrencyModal from "./features/Modal/CurrenciesModal";
// import SettingModal from "./features/Modal/SettingModal";
import { connect } from "react-redux";
import { fetchRateNames } from "./redux/actions";

const App = ({ fetchRates, fetchMonetary, fetchRateNames }) => {
  // const [exchangeValue, setExchangeValue] = useState("");

  useEffect(() => {
    fetchRateNames();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <h2>From:</h2>
        <From />
        <h2>To: </h2>
        {/* <To /> */}
        <h2>Currency modal</h2>
        {/* <CurrencyModal /> */}
        <h2>SettingModal</h2>
        {/* <SettingModal /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataMonetary: state.appReducers.dataMonetary,
    // setSeletedCurrentModal: state.appReducers.setSeletedCurrentModal,
    // dataExchange: state.appReducers.dataExchange,
    // countryNames: state.appReducers.countryNames,
  };
};
const mapDispatchToProps = {
  fetchRateNames,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
