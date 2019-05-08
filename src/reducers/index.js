import { combineReducers } from "redux";
import earthquakeReducer from "./earthquakeReducer";
import zoomToFeatureReducer from "./zoomToFeatureReducer";

export default combineReducers({
  earthquakes: earthquakeReducer /** assign the earthquake data to store as earthquakes */,
  zoomToFeature: zoomToFeatureReducer
});
