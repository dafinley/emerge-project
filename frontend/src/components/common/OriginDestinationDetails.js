import React from 'react';
import Geocode from "react-geocode";
import { Dispatcher, Constants } from "../../flux";

import {
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";

class OriginDestinationDetails extends React.Component {
  constructor(props){
    super(props);
    Geocode.setApiKey("AIzaSyDUbb1_7_W8eKegBm5URGaec0mj6ttiw00");
    this.state = {
      originTxt: '',
      origin: {lat: 41.8507300, lng: -87.6512600},
      destinationTxt: '',
      destination: { lat: 41.8525800, lng: -87.6514100} 
    }
  }

  reverseGeocode(){
  	Geocode.fromAddress(this.state.originTxt).then(
	  response => {
	    const { lat, lng } = response.results[0].geometry.location;
	    Dispatcher.dispatch({
          actionType: Constants.UPDATE_ORIGIN,
          payload: {lat, lng}
        });
	  },
	  error => {
	    Dispatcher.dispatch({
          actionType: Constants.UPDATE_ORIGIN,
          payload: this.state.origin
        });
	  }
    );

    Geocode.fromAddress(this.state.destinationTxt).then(
	  response => {
	    const { lat, lng } = response.results[0].geometry.location;
	    Dispatcher.dispatch({
          actionType: Constants.UPDATE_DESTINATION,
          payload: {lat, lng}
        });
	  },
	  error => {
	    Dispatcher.dispatch({
          actionType: Constants.UPDATE_DESTINATION,
          payload: this.state.destination
        });
	  }
    );
  }

  render(){
  	const {originTxt, destinationTxt } = this.state;
  	return <Row>
	  <Col>
	    <Form>
	      <Row form>
	        <Col md="5" className="form-group">
	          <label htmlFor="feFirstName">Origin</label>
	          <FormInput
	            id="origin"
	            placeholder="Origin"
	            value={originTxt}
	            onChange={(event) => {this.setState({originTxt: event.target.value})}}
	          />
	        </Col>
	        <Col md="6" className="form-group">
	          <label htmlFor="feLastName">Destination</label>
	          <FormInput
	            id="destination"
	            placeholder="Destination"
	            value={destinationTxt}
	            onChange={(event) => {this.setState({destinationTxt: event.target.value})}}
	          />
	        </Col>
	        <Col md="1" className="form-group">
	          <label></label>
	          <Button onClick={this.reverseGeocode.bind(this)}><span className="material-icons">place</span></Button>
	        </Col>
	      </Row>
	    </Form>
	  </Col>
	</Row>
  }
}

export default OriginDestinationDetails;