import React, { useEffect } from "react";
import "./app.scss";
import Header from "./features/Header";
import CurrentMoney from "./features/CurrentMoney";
import TargetMoney from "./features/TargetMoney";
import CurrencyModal from "./features/Modal/CurrenciesModal";
// import SettingModal from "./features/Modal/SettingModal";
import { connect } from "react-redux";
import { fetchRates, fetchMonetary } from "./redux/actions";

const App = ({ fetchRates, fetchMonetary }) => {
  // const [exchangeValue, setExchangeValue] = useState("");

  useEffect(() => {
    fetchRates();
    fetchMonetary();
  }, []);

  // const countryCodeArr = Object.keys(dataMonetary);
  // const countryNameArr = [];
  // countryCodeArr.map((code) =>
  //   countryNameArr.push(code + " " + dataMonetary[code])
  // );
  // setTitleBlock(countryNameArr);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <h2>From:</h2>
        <CurrentMoney />
        <h2>To: </h2>
        <TargetMoney />
        <h2>Currency modal</h2>
        <CurrencyModal />
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
  fetchRates,
  fetchMonetary,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
