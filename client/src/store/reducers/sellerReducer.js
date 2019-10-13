import {
  SUCCESS_HIT_API,
  API_LOADING,
  ERROR_HIT_API,
  GET_STATE
} from "../dispatch";

let initState = {
  typeList: [
    { id: 1, name: "Rolex" },
    { id: 2, name: "Rolei" },
    { id: 3, name: "Rolldepan" }
  ],
  conditionList: [
    { id: 1, name: "Unworn" },
    { id: 2, name: "Perfect" },
    { id: 3, name: "Good" },
    { id: 4, name: "Fair" },
    { id: 5, name: "Poor" }
  ],
  companionList: [
    { id: 1, name: "With box" },
    { id: 2, name: "With papers" },
    { id: 3, name: "Both" },
    { id: 4, name: "none" }
  ],
  yearList: [2001, 2002, 2003, 2004],
  countryList: [
    "Germany",
    "Indonesia",
    "China",
    "Ukraine",
    "USA",
    "Russia",
    "Moldova"
  ], // BE should fetch country api from API country
  cityList: [
    "Aachen",
    "Jakarta",
    "Shangai",
    "Kiev",
    "Boston",
    "St. Pertersburg",
    "Chisinau"
  ], // FE should fetch BE after country has been fetched
  priceList: { price: 500, currency: "EUR" },
  isLoading : false,
};

const sellerReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_STATE: {
      return {
        ...state
      };
    }

    case API_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case ERROR_HIT_API: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    default:
      return { ...state };
  }
};

export default sellerReducer;
