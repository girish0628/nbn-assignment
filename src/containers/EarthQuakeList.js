import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEarthQuakeData, zoomToFeature } from "../actions";
import Map from "./Map";

class EarthQuakeList extends Component {
  state = {
    err: false,
    error_msg: ""
  };

  componentDidMount() {
    //Load all the earth quake data from action creator
    try {
      this.props.fetchEarthQuakeData();
    } catch (err) {
      //Set Error message to state to show the Error.
      this.setState({ err: true, error_msg: `${err}` });
    }
  }
  //iterate all the earthquake data and make list as left side navigation
  renderList = () => {
    const { features } = this.props.earthquakes;

    if (!features) return null;

    return features.map((feature, index) => {
      return (
        <div
          className="list-group"
          style={{ width: "30%" }}
          key={index}
          onClick={() => this.props.zoomToFeature(feature.geometry.coordinates)}
        >
          <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="arrow">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </div>

            <div className="d-flex w-70 justify-content-between list-content">
              <h6 className="mb-1">{feature.properties.place}</h6>
              <small>{feature.properties.type}</small>
            </div>

            <div className="d-flex w-70 justify-content-between">
              <p>{feature.properties.time}</p>
              <small>Magnitude : {feature.properties.mag}</small>
            </div>
          </a>
        </div>
      );
    });
  };
  render() {
    let className = "alert alert-warning alert-dismissible fade";
    if (this.state.err) {
      className += " show";
    }
    return (
      <div className="scroll-area" data-test="scroll-area">
        <div className="err-msg">
          <div className={className}>
            <strong>Error!</strong> Please enter a valid value in all the
            required fields before proceeding.
          </div>
        </div>
        {this.renderList()}
        <Map />
      </div>
    );
  }
}
//Map store states to current component props
const mapStateToProps = state => {
  return {
    earthquakes: state.earthquakes
  };
};

export default connect(
  mapStateToProps,
  { fetchEarthQuakeData, zoomToFeature }
)(EarthQuakeList);
