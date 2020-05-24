import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import appReducers from "./redux/reducers";

// configs for reducers
const allReducers = {
  appReducers,
};
const reducers = combineReducers({ ...allReducers });

const stores = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default stores;
