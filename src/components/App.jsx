import React, { Component } from "react";
import Display from "./Display";
import ButtonPad from "./ButtonPad";
import Footer from "./Footer";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayVal: [],
      displayOp: ''
    }
    this.buttonPress = this.buttonPress.bind(this);
  }
  buttonPress(val) {
    // console.log(val);
    const displayArr = this.state.displayVal;
    displayArr.push(val);
    this.setState({ displayVal: displayArr });
  }
  render() {
    const { displayVal, displayOp } = this.state;

    return(
      <div>
        <main className="main-layout main-shadow main-border">
          <Display mainValue={displayVal}/>
          <ButtonPad onButtonDisplayClick={this.buttonPress}/>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;

