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

class OriginDetails extends React.Component {
  constructor(props){
    super(props);
    Geocode.setApiKey("AIzaSyDUbb1_7_W8eKegBm5URGaec0mj6ttiw00");
    this.state = {
      originTxt: '',
      origin: {lat: 41.8507300, lng: -87.6512600}
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
  }

  render(){
  	const {originTxt} = this.state;
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

export default OriginDetails;