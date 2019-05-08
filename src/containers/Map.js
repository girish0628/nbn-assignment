import React, { Component } from "react";
import L from "leaflet";
import { connect } from "react-redux";
class Map extends Component {
  componentDidMount() {
    //Declare map object
    this.map = null;
    //Initialize the map object after dom ready
    this.mapInit();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.earthquakes !== null) {
      //Earthquake marker styling options
      let geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };

      //Create marker object using earthquake api
      let geojsonLayer = L.geoJson(nextProps.earthquakes, {
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions);
        }
      }).addTo(this.map);

      //Zoom to map based on earthquake geojson layer/Data
      this.map.fitBounds(geojsonLayer.getBounds());
    }
    if (nextProps.zoomToFeature.length !== 0) {
      let { zoomToFeature } = nextProps;
      //Zoom to feature on click of list
      this.map.setView(new L.LatLng(zoomToFeature[1], zoomToFeature[0]), 12);
    }
  }
  mapInit = () => {
    const { earthquakes } = this.props;
    if (!earthquakes) return null;
    // initialize the map
    this.map = L.map("map");
    //Load tile layer on map using map box maps
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      this.map
    );
  };

  render() {
    return <div id="map" />;
  }
}
//Map store states to current component props
const mapStateToProps = state => {
  return {
    earthquakes: state.earthquakes,
    zoomToFeature: state.zoomToFeature
  };
};

export default connect(
  mapStateToProps,
  {}
)(Map);
