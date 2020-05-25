import {
  SET_ORIGINAL_VALUE,
  TOGGLE_FAVOURITE_MONETARY,
  SET_ORGINAL_FORM,
  FETCH_RATE_NAMES_START,
  FETCH_RATE_NAMES_SUCCESS,
  // FETCH_RATE_NAMES_FAIL,
} from "./types";
const initialState = {
  loading: false,
  error: false,
  countryNames: [],
  selectedCountryCodes: [],
  dataMonetary: [],
  dataRates: {},
  countryCodeArr: [],

  seletedCountries: [],
  formOriginalValue: {
    seletedOriginalCountry: "",
    seletedOriginalcountryCode: "",
  },
  // ------------
  fullNameCountries: [],
  inputOriginalValue: "",
  allRates: "",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RATE_NAMES_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_RATE_NAMES_SUCCESS: {
      // rates: get rate
      // data: get country + name + monetary code
      const { rates, data } = action.payload;
      // Create object for including all information
      const countryObjects = [];
      for (let [key, value] of Object.entries(data)) {
        const rate = rates[`${key}`];
        const newObj = {
          fullCountryName: `${key} ${value}`,
          countryCode: `${key}`,
          baseRate: rate,
          isFavorite: false,
        };
        if (newObj.baseRate !== undefined) {
          countryObjects.push(newObj);
        }
      }
      return {
        ...state,
        loading: false,
        fullNameCountries: countryObjects,
        allRates: rates,
      };
    }
    case SET_ORIGINAL_VALUE: {
      return {
        ...state,
        inputOriginalValue: action.payload,
      };
      // =================================================================
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
      const { seletedOriginalcountryCode } = action.payload;
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
