import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <p>Loading...</p>
      )
    }
  }
}

export default Display;