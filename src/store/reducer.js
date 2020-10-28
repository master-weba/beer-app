import {types} from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.GET_BEER_SUCCESS: {
      return {
        ...state,
        beers: action.data
      }
    }
    case types.SEARCH_BEER: {
      localStorage.setItem('searchValue', action.value)
      return {
        ...state,
        searchValue: action.value
      }
    }
    case types.FILTER_BEER:
      localStorage.setItem('filterValue', JSON.stringify(action.value));
      return {
        ...state,
        filterValue: action.value
      }
    default:
      return state
  }
}
