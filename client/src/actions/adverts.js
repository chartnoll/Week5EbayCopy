import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_DETAILED_ADVERT = 'FETCHED_DETAILED_ADVERT'
export const FETCHED_ALL_ADVERTS = 'FETCHED_ALL_ADVERTS'

export const fetchAdvert = (advertId) => (dispatch) => {
  request
    .get(`${baseUrl}/adverts/${advertId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_ADVERT,
      payload: response.body.advert
    }))
    .catch(err => alert(err))
}

export const fetchAllAdverts = () => (dispatch) => {
  request
    .get(`${baseUrl}/adverts`)
    .then(response => dispatch({
      type: FETCHED_ALL_ADVERTS,
      payload: response.body.advert
    }))
    .catch(err => alert(err))
}
