import {types} from "./types";


export const useActions = (state, dispatch) => {
  return {
    selectBeers: async (page, perPage = 20) => {
      await dispatch({
        type: types.GET_BEER_REQUEST,
        data: {
          page, perPage
        }
      })
    },
    setSearchValue: (value) => {
      dispatch({
        type: types.SEARCH_BEER,
        value
      })
    },
    setFilterValue: (value) => {
      dispatch({
        type: types.FILTER_BEER,
        value
      })
    }
  }
}
