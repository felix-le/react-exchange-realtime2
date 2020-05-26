import {
  SET_ORIGINAL_VALUE,
  TOGGLE_FAVOURITE_MONETARY,
  FETCH_RATE_NAMES_START,
  FETCH_RATE_NAMES_SUCCESS,
  SEARCH_CURRENT_MODAL,
  SWITCH_OBJECT_FROM,
  SET_CURRENT_OBJECT_FROM,
  TOGGLE_CURRENT_MODAL,
  TOGGLE_SETTING_MODAL,
  CLOSE_ALL_MODAL,
  SET_API_URL,
} from "./types";
const initialState = {
  loading: false,
  error: false,
  showFullCountryNames: [],
  initialFullCountryNames: [],
  inputOriginalValue: "",
  allRates: "",
  faviousCountries: [],
  changeObjectFrom: {
    fullCountryName: "USD United States Dollar",
    countryCode: "USD",
    baseRate: 1,
    isFavorite: false,
  },
  currentObjectFrom: {},
  isCurrencyModelShowing: false,
  isSettingModelShowing: false,
  apiRateUrl: {
    url: "https://open.exchangerate-api.com/v6/latest",
    key: false,
    aboutLink: "https://www.exchangerate-api.com/docs/free-exchange-rate-api",
  },
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
        showFullCountryNames: countryObjects,
        originalCountryNames: countryObjects,
        initialFullCountryNames: countryObjects,
        allRates: rates,
      };
    }
    case SET_ORIGINAL_VALUE: {
      return {
        ...state,
        inputOriginalValue: action.payload,
      };
    }

    case TOGGLE_FAVOURITE_MONETARY: {
      const newArr = state.initialFullCountryNames.map(function (country) {
        if (country.fullCountryName === action.payload.fullCountryName) {
          country.isFavorite = !country.isFavorite;
        }
        return country;
      });

      const faviousArr = newArr.filter((country) => country.isFavorite);
      const nonFaviousArr = newArr.filter((country) => !country.isFavorite);

      return {
        ...state,
        faviousCountries: faviousArr,
        showFullCountryNames: [...faviousArr, ...nonFaviousArr],
      };
    }
    case SEARCH_CURRENT_MODAL: {
      const faviousArr = state.initialFullCountryNames.filter(
        (country) => country.isFavorite
      );
      const nonFaviousArr = state.initialFullCountryNames.filter(
        (country) => !country.isFavorite
      );
      const showFullCountryNames = [...faviousArr, ...nonFaviousArr].filter(
        (country) =>
          country.fullCountryName.toLowerCase().indexOf(action.payload) !== -1
      );
      return {
        ...state,
        showFullCountryNames: showFullCountryNames,
      };
    }

    case SWITCH_OBJECT_FROM: {
      return {
        ...state,
        changeObjectFrom: action.payload,
        faviousCountries: state.faviousCountries.map((country) => {
          if (country.countryCode === action.payload.countryCode) {
            return state.changeObjectFrom;
          }
          return country;
        }),
      };
    }

    case SET_CURRENT_OBJECT_FROM: {
      return {
        ...state,
        currentObjectFrom: action.payload,
      };
    }
    case TOGGLE_CURRENT_MODAL: {
      return {
        ...state,
        isCurrencyModelShowing: !state.isCurrencyModelShowing,
      };
    }
    case TOGGLE_SETTING_MODAL: {
      return {
        ...state,
        isSettingModelShowing: !state.isSettingModelShowing,
      };
    }

    case CLOSE_ALL_MODAL: {
      return {
        ...state,
        isSettingModelShowing: false,
        isCurrencyModelShowing: false,
      };
    }
    case SET_API_URL: {
      return {
        ...state,
        apiRateUrl: action.payload,
      };
    }
    //=================================================================
    default:
      return state;
  }
};
export default reducers;
