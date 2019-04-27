import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Modal, ModalBody, ModalHeader, Button } from "shards-react";
import UserDetails from "../user-details/UserDetails";
import Reviews from './Reviews';

export default class ServiceRequest extends React.Component {

  constructor(props){
    super(props);
  
    this.state = {
      openWorkerModal: false,
    }
    this.toggleServiceWorkerModal.bind(this);
  }

  toggleServiceWorkerModal(id){
    if(id){
      this.setState({ openWorkerModal: true});
    } else {
      this.setState({ openWorkerModal: false});
    }
  }

  render() {
    const { openWorkerModal } = this.state;
    return (
      <Container fluid className="main-content-container px-4">    
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Available Service Providers</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      Name
                    </th>
                    <th scope="col" className="border-0">
                      Rating
                    </th>
                    <th scope="col" className="border-0">
                      Sponsor
                    </th>
                    <th scope="col" className="border-0">
                      Current Distance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Button onClick={() => { this.toggleServiceWorkerModal(1)}}>Jason Ali</Button></td>
                    <td><span className="material-icons small-icon">star</span>4.5</td>
                    <td>Non Profit 1</td>
                    <td><span className="material-icons small-icon">place</span>1.6 miles</td>
                  </tr>
                  <tr>
                    <td><Button onClick={() => { this.toggleServiceWorkerModal(2)}}>Clark Kent</Button></td>
                    <td><span className="material-icons small-icon">star</span>4.0</td>
                    <td>Non Profit 2</td>
                    <td><span className="material-icons small-icon">place</span>2.3 miles</td>
                  </tr>
                  <tr>
                    <td><Button onClick={() => { this.toggleServiceWorkerModal(3)}}>Wonder Woman</Button></td>
                    <td><span className="material-icons small-icon">star</span>5.0</td>
                    <td>Non Profit 4</td>
                    <td><span className="material-icons small-icon">place</span>100 yards</td>
                  </tr>
                  <tr>
                    <td><Button onClick={() => { this.toggleServiceWorkerModal(4)}}>Black Panther</Button></td>
                    <td><span className="material-icons small-icon">star</span>5.0</td>
                    <td>Non Profit 3</td>
                    <td><span className="material-icons small-icon">place</span>100 Feet</td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal size="lg" open={openWorkerModal} toggle={this.toggleServiceWorkerModal.bind(this)}>
        <ModalHeader>Service Worker Details</ModalHeader>
        <ModalBody><Row><Col><UserDetails /></Col><Col><Reviews /></Col></Row></ModalBody>
      </Modal>
    </Container>
  );
}

}