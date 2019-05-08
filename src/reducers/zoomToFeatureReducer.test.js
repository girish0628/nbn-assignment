import zoomToFeatureReducer from "./zoomToFeatureReducer";
import { CLICK_INFO } from "../actions/types";

describe("zoomToFeature Reducer", () => {
  it("Should return default state", () => {
    const newState = zoomToFeatureReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state for coordinates if receiving type", () => {
    const coordinates = [-114.9723333, 33.0348333, 0.92];
    const newState = zoomToFeatureReducer(undefined, {
      type: CLICK_INFO,
      payload: coordinates
    });
    expect(newState).toEqual(coordinates);
  });
});
