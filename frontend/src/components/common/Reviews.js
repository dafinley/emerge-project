import React from 'react';


export default class Reviews extends React.Component {

	constructor(props){
      super(props);
    }

	render(){
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
                    <td>Review 1</td>
                    <td><span className="material-icons small-icon">star</span>4.5</td>
                    <td>Best Service Worker in Miami</td>
                  </tr>
                  <tr>
                    <td>Review 2</td>
                    <td><span className="material-icons small-icon">star</span>4.0</td>
                    <td>Everything as Excellent</td>
                  </tr>
                  <tr>
                    <td>Review 3</td>
                    <td><span className="material-icons small-icon">star</span>5.0</td>
                    <td>No Complaints</td>
                  </tr>
                  <tr>
                    <td>Review 4</td>
                    <td><span className="material-icons small-icon">star</span>5.0</td>
                    <td>Will Definitely Use Again ASAP!</td>
                  </tr>
                </tbody>
              </table>
			);
	}
}