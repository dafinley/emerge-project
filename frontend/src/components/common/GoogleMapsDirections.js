/* eslint-disable no-undef */
import React from 'react';
import  { compose, withProps, lifecycle } from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps';
import { Store } from "../../flux";

class GoogleMapsDirections extends React.Component {
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
    console.log(this);
    this.setState({
      ...this.state,
      origin: Store.getOrigin(),
      destination: Store.getDestination()
    });
  }



render() {
    const { origin, destination } = this.state;
    const DirectionsComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDUbb1_7_W8eKegBm5URGaec0mj6ttiw00&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: <div style={{height: `600px`, width: `600px` }}  />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route({
            origin: new google.maps.LatLng(origin.lat, origin.lng),
            destination: new google.maps.LatLng(destination.lat, destination.lng),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: {...result},
                markers: true
              })
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        }
      })
    )(props =>
      <GoogleMap defaultZoom={3}>
        {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
      </GoogleMap>
    );
    return (<DirectionsComponent />)
  }
}
export default GoogleMapsDirections