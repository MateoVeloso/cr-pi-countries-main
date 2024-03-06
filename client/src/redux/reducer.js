import {
  FILTERS,
  GET_ACTIVITIES,
  GET_ALL_COUNTRIES,
  SEARCH_COUNTRY,
  SELECT_COUNTRIES,
  SORT_COUNTRIES,
  FILTER_ACTIVITY
} from "./actions";

const initialState = {
  allCountries: [],
  allCountriesBackup: [],
  filteredResults: [],
  activityNames: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  console.log("Current state:", state);
  switch (type) {
    case GET_ALL_COUNTRIES:
      payload = payload.sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        allCountries: payload,
        allCountriesBackup: payload,
      };

    case SEARCH_COUNTRY:
      const orderedSearch = state.allCountriesBackup.filter(country => {return payload.some(SrchCountry => SrchCountry.id === country.id)});
      return {
        ...state,
        allCountries: orderedSearch,
      };

    case FILTERS:
      const { continent, activity } = payload;
      let filteredCountries = state.allCountries;
      if (continent !== "All") {filteredCountries = filteredCountries.filter((country) => country.continent === continent)}
      if (activity !== "All") {filteredCountries = filteredCountries.filter((country) =>  country.Activities && country.Activities.some((act) => act.name === activity))}
      if ((activity !== "All" || continent !== "All") && filteredCountries.length===0) filteredCountries = "noResults"
      return {
        ...state,
        filteredResults: filteredCountries, 
      };

    case SORT_COUNTRIES:
      let resultsToSort = [...state.allCountries];
       if (payload === "Ascending") {
        resultsToSort.sort((a, b) => a.name.localeCompare(b.name));
      } else if (payload === "Descending") {
        resultsToSort.sort((a, b) => b.name.localeCompare(a.name));
      } else if (payload === "MaxPop") {
        resultsToSort.sort((a, b) => b.population - a.population);
      } else if (payload === "MinPop") {
        resultsToSort.sort((a, b) => a.population - b.population);
      } else if (payload === "MaxArea") {
        resultsToSort.sort((a, b) => b.area - a.area);
      } else if (payload === "MinArea") {
        resultsToSort.sort((a, b) => a.area - b.area);
      }

      return {
          ...state,
          allCountries: resultsToSort,
      }
      
    case GET_ACTIVITIES:
      return {
        ...state,
        activityNames: payload,
      };

    case FILTER_ACTIVITY:
        const resetCountries = [...state.allCountries];
        const filteredActivity = resetCountries.filter((country) =>country.Activities.some((activity) => activity.name === payload));
        return {
          ...state,
          filteredResults: filteredActivity.length > 0 ? filteredActivity : resetCountries,
      };

      case SELECT_COUNTRIES:
      return {
        ...state,
        selectedCountry: payload,
      };
      
    default: return state
  }
};
export default rootReducer;
