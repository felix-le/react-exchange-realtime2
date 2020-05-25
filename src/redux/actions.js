// import { v4 as uuidv4 } from "uuid";
import { API_URL } from "../server/";
import axios from "axios";
import {
  SET_ORIGINAL_VALUE,
  TOGGLE_FAVOURITE_MONETARY,
  SET_ORGINAL_FORM,
  FETCH_RATE_NAMES_START,
  FETCH_RATE_NAMES_SUCCESS,
  FETCH_RATE_NAMES_FAIL,
} from "./types";

export const fetchRateNames = () => async (dispatch) => {
  dispatch({
    type: FETCH_RATE_NAMES_START,
  });
  try {
    // call rates
    const resCurr = await axios.get(API_URL.EXCHANGE_RATES);
    const rates = resCurr.data.rates;
    // call country name
    const res = await axios.get(API_URL.COUNTRY_MONETARY);
    const data = res.data;

    dispatch({
      type: FETCH_RATE_NAMES_SUCCESS,
      payload: { rates, data },
    });
  } catch (err) {
    dispatch({
      type: FETCH_RATE_NAMES_FAIL,
    });
  }
};

export const setInputValue = (payload) => ({
  type: SET_ORIGINAL_VALUE,
  payload,
});

export const toggleFavouriteMonetary = (countryCode, country) => ({
  type: TOGGLE_FAVOURITE_MONETARY,
  payload: { countryCode, country },
});

export const setOrginalForm = (
  seletedOriginalCountry,
  seletedOriginalcountryCode
) => ({
  type: SET_ORGINAL_FORM,
  payload: { seletedOriginalCountry, seletedOriginalcountryCode },
});

// const rates = getState().appReducers.allRates;
// const convert = (baseCurrency, changeCurrency, baseAmount) => {
//   // All rates are from USD to other currencies
//   const usdToBase = parseFloat(rates[baseCurrency]); // E.g: USD/EUR = 0.9
//   const usdToChange = parseFloat(rates[changeCurrency]); // E.g: USD/CNY = 7.1
//   const baseToChange = usdToChange / usdToBase; // E.g: EUR/CNY = (USD/CNY) / (USD/EUR)

//   const convertedAmount = baseToChange * parseFloat(baseAmount);

//   if (isNaN(convertedAmount)) return "";

//   return convertedAmount.toLocaleString("fullwide", {
//     maximumFractionDigits: 2,
//   });
// };
