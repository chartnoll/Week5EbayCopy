import {FETCHED_DETAILED_ADVERT} from '../actions/adverts'

export default function (state = null, action) {
  switch (action.type) {
    case FETCHED_DETAILED_ADVERT:
      console.log("In the reducer!")
      console.log(action.payload)
      return action.payload

    default:
      return state
  }
}
