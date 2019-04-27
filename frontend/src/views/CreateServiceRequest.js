import React from "react";
import { Container, Row, Col, FormSelect } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import GoogleMapsDirections from "../components/common/GoogleMapsDirections";
import GoogleMapsOriginOnlyDirections from '../components/common/GoogleMapsOriginOnlyDirections';
import ServiceRequests from '../components/common/ServiceRequests';
import OriginDestinationDetails from '../components/common/OriginDestinationDetails';
import OriginDetails from '../components/common/OriginDetails';
import { Dispatcher, Constants, Store } from "../flux";

export default class CreateServiceRequest extends React.Component{

  constructor(props){
    super(props);
  
    this.state = {
      showOriginDetails: Store.getShowOriginOnly(),
      showOriginDestinationDetails: !Store.getShowOriginOnly()
    }
  }

  async updateServiceRequestType(typeId){
    await Dispatcher.dispatch({
          actionType: Constants.UPDATE_ORIGIN_ONLY,
          payload: !!(typeId % 2)
        });
    this.setState({
      showOriginDetails: Store.getShowOriginOnly(),
      showOriginDestinationDetails: !Store.getShowOriginOnly()
    });
  }


  render(){
    const { showOriginDetails, showOriginDestinationDetails } = this.state;

    return(<Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="Create Service Request" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        <Col lg="6">
          <FormSelect onChange={(event) => {this.updateServiceRequestType(parseInt(event.target.value))}}>
            <option value="0">Pickup Groceries</option>
            <option value="1">Housecleaning</option>
            <option value="2">Logistics</option>
            <option value="3">Yard Work</option>
          </FormSelect>
          { showOriginDetails &&
            <Row><OriginDetails />
            <GoogleMapsOriginOnlyDirections /></Row>
          }
          { showOriginDestinationDetails && 
            <Row><OriginDestinationDetails />
            <GoogleMapsDirections /></Row>
          }
          
        </Col>
        <Col lg="6">
          <ServiceRequests />
        </Col>
      </Row>
    </Container>)
  };
}