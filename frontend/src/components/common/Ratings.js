import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Col } from "shards-react";

export default class Ratings extends Component {
  handleChange(e) {
    this.setState({
      file: e.target.files[0]
    })
  }

  getStars() {
    
  }

  render() {
    return (
      <div>hello</div>
    );
  }
}