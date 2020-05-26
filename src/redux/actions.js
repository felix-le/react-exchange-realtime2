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
  TOGGLE_CURRENT_MODAL,
  TOGGLE_SETTING_MODAL,
  CLOSE_ALL_MODAL,
  SET_API_URL,
} from "./types";

export const fetchRateNames = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_RATE_NAMES_START,
  });
  try {
    const apiBase = getState().appReducers.apiRateUrl.url;
    // call rates
    const resCurr = await axios.get(apiBase);
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

export const setShowModelCurrencies = (payload) => ({
  type: TOGGLE_CURRENT_MODAL,
  payload,
});

export const setShowSettingModal = (payload) => ({
  type: TOGGLE_SETTING_MODAL,
  payload,
});

export const setCloseAllModal = (payload) => ({
  type: CLOSE_ALL_MODAL,
  payload,
});

export const setApiUrl = (payload) => {
  return {
    type: SET_API_URL,
    payload,
  };
};

// =================================
