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
    // if (loading) {
    //   return (
    //     <p>Loading...</p>
    //   )
    // }
    return(
      <div className="display inside-border">
        <input type="text" className="main" maxLength="21"/>
        <input type="text" className="calculations" maxLength="21"/>
      </div>
    )
  }
}

export default Display;