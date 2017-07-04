import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import getPeople from './api'
import {ToastAndroid} from 'react-native'
import realm from './realm/realm';

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
    dispatch(getData());

    //Load From Realm
    let properties = realm.objects('Property');
    dispatch(getDataSuccess(properties));
    //console.log('LOADED FROM REALM : '+properties);

    fetch('https://api.nestoria.co.uk/api/?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=brighton', {
      method: 'GET'
    })
    .then((response) =>  response.json())
    .then((responseJson) => {
      let fetchesProperties = responseJson.response.listings;
      //console.log('RESPONSEJSON : '+fetchesProperties);
      dispatch(getDataSuccess(fetchesProperties));
      //Update realm data
      fetchesProperties.map((value)=>{
          if(value.price==null)
            value.price='0';
            realm.write(() => {
             realm.create('Property', {
               title:value.title.toString(),
               bathroom_number: value.bathroom_number.toString(),
               bedroom_number:value.bedroom_number.toString(),
               summary:value.summary.toString(),
               price:value.price.toString(),
               img_url:value.img_url.toString(),
               thumb_url:value.thumb_url.toString(),
               property_city:'Brighton'},true);
             });
        }
      );
     })
     .catch((err) => console.log('err:', err))
    /*getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))*/
  }
}
