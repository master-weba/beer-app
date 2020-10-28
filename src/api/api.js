import axios from 'axios'

let mainInstance = null;

const ROOT_END_POINT = 'https://api.punkapi.com/v2/'

const GET_BEERS_END_POINT = `${ROOT_END_POINT}beers`

export class Api {

  constructor() {

    if (!mainInstance) {
      mainInstance = this
    }

    return mainInstance
  }

  getBeerList(page, perPage) {

    return axios.get(GET_BEERS_END_POINT, {
      params: {
        page,
        per_page: perPage
      }
    }).then( item => item )
      .catch(this.handleError)
  }

  handleError = (err) => {
    console.error(err);
    return Promise.reject(err);
  };
}
