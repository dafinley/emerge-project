/* eslint-disable no-undef */
import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import { Store } from "../../flux";

class GoogleMapsOriginOnlyDirections extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      origin: Store.getOrigin(),
      destination: Store.getDestination()
    }
    this.onChange = this.onChange.bind(this);
  }


  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      origin: Store.getOrigin(),
      destination: Store.getDestination()
    });
  }


render() {
  const { origin } = this.state;
  console.log(origin);
  const MapWithAMarker = withGoogleMap(props => {
    const geo = new google.maps.LatLng(parseFloat(origin.lat), parseFloat(origin.lng));
    console.log(geo);
    return (<GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: origin.lat,  lng: origin.lng}}
    >
      <Marker
      position={{ lat: origin.lat,  lng: origin.lng }}
    />
    </GoogleMap>)
  }
  );
    return(
      <MapWithAMarker
        containerElement={<div style={{ width: `100%` }} />}
        mapElement={<div style={{height: `600px`, width: `600px` }}  />}
      />)
  }
}
export default GoogleMapsOriginOnlyDirections