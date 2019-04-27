import React from 'react';


export default class Reviews extends React.Component {

	constructor(props){
      super(props);
      this.state = {
      	avatar1: require("./../../images/avatars/hackathon2.jpg"),
      	avatar2: require("./../../images/avatars/hackathon3.jpg"),
      	avatar3: require("./../../images/avatars/hackathon4.jpg"),
      	avatar4: require("./../../images/avatars/hackathon6.jpg"),
      }
    }

	render(){
		const { avatar1, avatar2, avatar3, avatar4 } = this.state;
		return (
			<table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      From
                    </th>
                    <th scope="col" className="border-0">
                      Rating
                    </th>
                    <th scope="col" className="border-0">
                      Review
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img
				          className="rounded-circle"
				          src={avatar1}
				          width="30"
				        /></td>
                    <td><span className="material-icons small-icon">star</span>4.5</td>
                    <td>Best Service Worker in Miami</td>
                  </tr>
                  <tr>
                    <td><img
				          className="rounded-circle"
				          src={avatar2}
				          width="30"
				        /></td>
                    <td><span className="material-icons small-icon">star</span>4.0</td>
                    <td>Everything as Excellent</td>
                  </tr>
                  <tr>
                    <td><img
				          className="rounded-circle"
				          src={avatar3}
				          width="30"
				        /></td>
                    <td><span className="material-icons small-icon">star</span>5.0</td>
                    <td>No Complaints</td>
                  </tr>
                  <tr>
                    <td><img
				          className="rounded-circle"
				          src={avatar4}
				          width="30"
				        /></td>
                    <td><span className="material-icons small-icon">star</span>5.0</td>
                    <td>Will Definitely Use Again ASAP!</td>
                  </tr>
                </tbody>
              </table>
			);
	}
}