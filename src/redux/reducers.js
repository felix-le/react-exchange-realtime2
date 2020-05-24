import {
  FECTH_RATES_START,
  FETCH_RATES_SUCCESS,
  // FETCH_RATES_FAILURE,
  FECTH_MONETARY_START,
  FETCH_MONETARY_SUCCESS,
  // FETCH_MONETARY_FAILURE,
  SET_ORIGINAL_VALUE,
  TOGGLE_FAVOURITE_MONETARY,
  SET_ORGINAL_FORM,
} from "./types";
const initialState = {
  loading: false,
  error: false,
  countryNames: [],
  selectedCountryCodes: [],
  dataMonetary: [],
  dataRates: {},
  countryCodeArr: [],
  inputOriginalValue: "",
  seletedCountries: [],

  formOriginalValue: {
    seletedOriginalCountry: "",
    seletedOriginalcountryCode: "",
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FECTH_RATES_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_RATES_SUCCESS: {
      const { rates } = action.payload;
      const countryCodeArr = Object.keys(rates);

      return {
        ...state,
        loading: false,
        countryCodeArr: countryCodeArr,
        dataRates: rates,
      };
    }
    case FECTH_MONETARY_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_MONETARY_SUCCESS: {
      const data = action.payload.data;

      const countryNameArr = [];

      state.countryCodeArr.map((code) =>
        countryNameArr.push(code + " " + data[code])
      );

      return {
        ...state,
        dataMonetary: data,
        countryNames: countryNameArr,
        loading: false,
      };
    }
    case SET_ORIGINAL_VALUE: {
      return {
        ...state,
        inputOriginalValue: action.payload,
      };
    }

    // find all strings in array containing 'thi'
    // const items = ['item 1', 'thing', 'id-3-text', 'class'];
    // const matches = items.filter(s => s.includes('thi'));

    case TOGGLE_FAVOURITE_MONETARY: {
      const newArrCountryCode = [...state.selectedCountryCodes];
      const newArrCountries = [...state.seletedCountries];

      const checkCountryCode = state.selectedCountryCodes.indexOf(
        action.payload.countryCode
      );
      const checkNewArrCountries = state.seletedCountries.indexOf(
        action.payload.country
      );

      if (checkCountryCode !== -1) {
        newArrCountryCode.splice(checkCountryCode, 1);
      } else {
        newArrCountryCode.push(action.payload.countryCode);
      }

      if (checkNewArrCountries !== -1) {
        newArrCountries.splice(checkCountryCode, 1);
      } else {
        newArrCountries.push(action.payload.country);
      }

      return {
        ...state,
        selectedCountryCodes: [...newArrCountryCode],
        seletedCountries: [...newArrCountries],
      };
    }
    case SET_ORGINAL_FORM: {
      const { seletedOriginalCountry } = action.payload;
      console.log(
        "OUTPUT: reducers -> seletedOriginalCountry",
        seletedOriginalCountry
      );
      const { seletedOriginalcountryCode } = action.payload;
      console.log(
        "OUTPUT: reducers -> seletedOriginalcountryCode",
        seletedOriginalcountryCode
      );
      return {
        ...state,
        formOriginalValue: {
          seletedOriginalCountry,
          seletedOriginalcountryCode,
        },
      };
    }

    default:
      return state;
  }
};
export default reducers;

//indexOf + filter
