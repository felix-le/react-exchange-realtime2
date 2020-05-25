// import { v4 as uuidv4 } from "uuid";
import { API_URL } from "../server/";
import axios from "axios";
import {
  SET_ORIGINAL_VALUE,
  TOGGLE_FAVOURITE_MONETARY,
  FETCH_RATE_NAMES_START,
  FETCH_RATE_NAMES_SUCCESS,
  FETCH_RATE_NAMES_FAIL,
  SEARCH_CURRENT_MODAL,
  SWITCH_OBJECT_FROM,
  SET_CURRENT_OBJECT_FROM,
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

export const toggleFavouriteMonetary = (payload) => ({
  type: TOGGLE_FAVOURITE_MONETARY,
  payload,
});

export const modalSearch = (payload) => ({
  type: SEARCH_CURRENT_MODAL,
  payload,
});

export const setObjectForm = (payload) => ({
  type: SWITCH_OBJECT_FROM,
  payload,
});

export const setCurrentObject = (payload) => ({
  type: SET_CURRENT_OBJECT_FROM,
  payload,
});

// =================================
