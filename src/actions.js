import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import getPeople from './api'
import {ToastAndroid} from 'react-native'

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    fetch('https://api.nestoria.co.uk/api/?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=brighton', {
      method: 'GET'
    })
    .then((response) =>  response.json())
    .then((responseJson) => {
      console.log('RESPONSEJSON : '+responseJson.response.listings.length);
      dispatch(getDataSuccess(responseJson.response.listings));
     })
     .catch((err) => console.log('err:', err))
    /*getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))*/
  }
}
