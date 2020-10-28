import {types} from "./types";
import {api} from "../api";

const selectBeers = async (payload, dispatch) => {
  const result = await api.getBeerList(payload.page, payload.perPage)
  dispatch({
    type: types.GET_BEER_SUCCESS,
    data: result.data
  })
}

export const applyMiddleware = dispatch => {
  return (action) => {
    switch (action.type) {
      case types.GET_BEER_REQUEST: {
        selectBeers(action.data, dispatch)
      }
      default:
        return dispatch(action)
    }
  }
}
