// import { v4 as uuidv4 } from "uuid";
import { API_URL } from "../server/";
import axios from "axios";
import {
  FECTH_RATES_START,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_FAILURE,
  FECTH_MONETARY_START,
  FETCH_MONETARY_SUCCESS,
  FETCH_MONETARY_FAILURE,
  SET_ORIGINAL_VALUE,
  TOGGLE_FAVOURITE_MONETARY,
  SET_ORGINAL_FORM,
} from "./types";

export const fetchRates = () => async (dispatch) => {
  dispatch({
    type: FECTH_RATES_START,
  });

  try {
    const res = await axios.get(API_URL.EXCHANGE_RATES);
    const rates = res.data.rates;
    dispatch({
      type: FETCH_RATES_SUCCESS,
      payload: { rates },
    });
  } catch (err) {
    dispatch({
      type: FETCH_RATES_FAILURE,
    });
  }
};

export const fetchMonetary = () => async (dispatch) => {
  dispatch({ type: FECTH_MONETARY_START });
  try {
    const res = await axios.get(API_URL.COUNTRY_MONETARY);
    const data = res.data;
    dispatch({
      type: FETCH_MONETARY_SUCCESS,
      payload: { data },
    });
  } catch (err) {
    dispatch({
      type: FETCH_MONETARY_FAILURE,
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
