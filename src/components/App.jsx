import React, { Component } from "react";
import Display from "./components/Display";
import ButtonPad from "./components/ButtonPad";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    const { loading } = this.state;

    if (loading) {
      return(
        <div>
          <h3>Loading...</h3>
        </div>
      )
    }
    return(
      <main>
        <Display />
        <ButtonPad />
      </main>
    )
  }
}

export default App;

