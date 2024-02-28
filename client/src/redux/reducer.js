import {
  FILTER_BY_CONTINENT,
  GET_ACTIVITIES,
  GET_ALL_COUNTRIES,
  SEARCH_COUNTRY,
  SELECT_COUNTRIES,
  SORT_COUNTRIES,
} from "./actions";

const initialState = {
  allCountries: [],
  allCountriesBackup: [],
  filteredResults: [],
  searchResults: [],
  selectedCountries: null,
  activityNames: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  console.log("Current state:", state);

  switch (type) {
    case GET_ALL_COUNTRIES:
      // console.log("Payload at Reducer:", payload);
      return {
        ...state,
        allCountries: payload,
        allCountriesBackup: payload,
      };
    case SEARCH_COUNTRY:
      const searchTerm = payload; // Assuming payload is the searched country object

      return {
        ...state,
        searchResults: searchTerm,
      };
    case FILTER_BY_CONTINENT:
      if (payload === "All") {
        return {
          ...state,
          filteredResults: [], // Show all countries
          searchResults: [],
        };
      }
      let filteredCountries = [];
      if (state.searchResults.length > 0) {
        filteredCountries = state.searchResults.filter(
          (country) => country.continent === payload
        );
      } else {
        filteredCountries = state.allCountries.filter(
          (country) => country.continent === payload
        );
      }
      console.log(payload);
      return {
        ...state,
        filteredResults: filteredCountries, // Show filtered countries
      };
    case SORT_COUNTRIES:
      const hasFilteredResults = state.filteredResults.length > 0;
      const hasSearchResults = state.searchResults.length > 0;

      let resultsToSort = [];

      if (hasFilteredResults) {
        resultsToSort = [...state.filteredResults];
      } else if (hasSearchResults) {
        resultsToSort = [...state.searchResults];
      } else {
        resultsToSort = [...state.allCountries];
      }

      // Sort the results based on the payload
      if (payload === "All") {
        return {
          ...state,
          filteredResults: [], // Show all countries
          searchResults: [],
        };
      } else if (payload === "Ascending") {
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

      // Update the state based on the scenario
      if (hasFilteredResults) {
        return {
          ...state,
          filteredResults: resultsToSort,
        };
      } else if (hasSearchResults) {
        return {
          ...state,
          searchResults: resultsToSort,
        };
      } else {
        return {
          ...state,
          filteredResults: resultsToSort,
          searchResults: resultsToSort,
        };
      }
    case SELECT_COUNTRIES:
      return {
        ...state,
        selectedCountry: payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activityNames: payload,
      };
    default:
      return state; // default return state unchanged
  }
};
export default rootReducer;
