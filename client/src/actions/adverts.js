import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_DETAILED_ADVERT = 'FETCHED_DETAILED_ADVERT'
export const FETCHED_ALL_ADVERTS = 'FETCHED_ALL_ADVERTS'
export const ADD_ADVERT = 'ADD_ADVERT'

export const fetchAdvert = (advertId) => (dispatch) => {
  console.log(advertId)
  request
    .get(`${baseUrl}/adverts/${advertId}`)
    .then(response => {
      console.log("in the response")
      dispatch({
        type: FETCHED_DETAILED_ADVERT,
        payload: response.body
      })
    })
    .catch(err => {
      console.log("in the catch")
      alert(err)}
    )
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

export const createAdvert = (advert) => (dispatch) => {
  request
    .post(`${baseUrl}/adverts`)
    .send(advert)
    .then(response => dispatch({
      type: ADD_ADVERT,
      payload: response.body
    }))
}
