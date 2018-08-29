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
    this.allClear = this.allClear.bind(this);
    this.clearEntry = this.clearEntry.bind(this);
  }
  buttonPress(val) {
    // console.log(val);
    if (val === 'AC') {
      this.allClear();
    } else if (val === 'CE') {
      this.clearEntry();
    } else {
      const displayArr = this.state.displayVal;
      displayArr.push(val);
      this.setState({ displayVal: displayArr });
    }
  }
  allClear() {
    this.setState({ displayVal: [] })
  }
  clearEntry() {
    const displayArr = this.state.displayVal;
    displayArr.pop();
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

