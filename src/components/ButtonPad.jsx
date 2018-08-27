import React, { Component } from "react";
import ButtonRow from "./ButtonRow";

class ButtonPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return(
      <h1>Button Pad</h1>
    )
  }
}

export default ButtonPad;