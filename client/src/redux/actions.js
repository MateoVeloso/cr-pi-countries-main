import axios from "axios";
// action.type
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";
export const ORDER_CARDS = "ORDER_CARDS";
export const SORT_COUNTRIES = "SORT_COUNTRIES";
export const SELECT_COUNTRIES = "SELECT_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

const endpointURL = "http://localhost:3001/";

export const getAllCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(endpointURL + "countries");

      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      console.log("Action - Error:", error.response);
      alert(error.message);
    }
  };
};

export const getActivitiesNames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(endpointURL + "activities");

      return dispatch({
        type: GET_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      console.log("Action - Error:", error.response);
      alert(error.message);
    }
  };
};

export const searchCountry = (country) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        endpointURL + `countries/name?query=${country}`
      );
      dispatch({
        type: SEARCH_COUNTRY,
        payload: data,
      });
    } catch (error) {
      console.log("Action - Error:", error.response);
      alert(error.message);
    }
  };
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};
export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: { attribute, order },
  };
};
export const filterActivities = (activity) => {
  return {
    type: FILTER_ACTIVITIES,
    payload: activity,
  };
};
export const sortCountries = (order) => {
  return {
    type: SORT_COUNTRIES,
    payload: order,
  };
};

export const selectCountry = (country) => {
  return {
    type: SELECT_COUNTRIES,
    payload: country,
  };
};
