import config from '../config'
import { GET_EARTHQUAKEDATA, CLICK_INFO } from './types';

//Make API request for the earthquake data and send to reducer
export const fetchEarthQuakeData = () => async dispatch=>{
        const response = await config.get('/summary/all_hour.geojson');
        dispatch({
            type: GET_EARTHQUAKEDATA,
            payload: response.data
        });
}   
//Get cordinates dispatch to reducer to zoom to feature on map
export const zoomToFeature  = coordinates => async dispatch=>{
    dispatch({
        type: CLICK_INFO,
        payload: coordinates
    });
} 