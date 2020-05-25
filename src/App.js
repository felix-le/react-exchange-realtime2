import React, { useEffect } from "react";
import "./app.scss";
import Header from "./features/Header";
import From from "./features/From";
import CurrencyModal from "./features/Modal/CurrenciesModal";
import To from "./features/To";
import SettingModal from "./features/Modal/SettingModal";
import { connect } from "react-redux";
import { fetchRateNames } from "./redux/actions";

const App = ({ fetchRateNames }) => {
  // const [exchangeValue, setExchangeValue] = useState("");

  useEffect(() => {
    fetchRateNames();
  }, [fetchRateNames]);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <h2>From:</h2>
        <From />
        <h2>To: </h2>
        <To />
        <h2>Currency modal</h2>
        <CurrencyModal />
        <h2>SettingModal</h2>
        <SettingModal />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     dataMonetary: state.appReducers.dataMonetary,
//   };
// };
const mapDispatchToProps = {
  fetchRateNames,
};

export default connect(null, mapDispatchToProps)(App);
