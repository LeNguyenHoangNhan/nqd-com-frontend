import React, { Component } from "react";
import "bootstrap";
import "./scss/style.scss";

class TopNavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>I'm a TopNavBar</h1>
        <h2>I'm Upin</h2>
        <i class="fa fa-paragraph" aria-hidden="true"></i>
      </React.Fragment>
    );
  }
}
export default TopNavBar;
