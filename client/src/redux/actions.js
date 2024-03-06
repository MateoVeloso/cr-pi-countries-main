import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const FILTERS = "FILTERS";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";
export const ORDER_CARDS = "ORDER_CARDS";
export const SORT_COUNTRIES = "SORT_COUNTRIES";
export const SELECT_COUNTRIES = "SELECT_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';

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
      const { data } = await axios(endpointURL + `countries/name?name=${country}`);
      dispatch({
          type: SEARCH_COUNTRY,
          payload: data,
        });
    } catch (error) {
      if(error.response && error.response.status===404){
        dispatch({
          type: SEARCH_COUNTRY,
          payload: [],
        })
      };
      console.log(error);
    }
  };
};

export const filters = (continent, activity) => {
  return {
    type: FILTERS,
    payload: { continent, activity }
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

export const filterActivity = (activityName) => {
  return{
    type: FILTER_ACTIVITY,
    payload: activityName
  }
};

