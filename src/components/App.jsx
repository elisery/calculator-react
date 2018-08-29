import React, { Component } from "react";
import Display from "./Display";
import ButtonPad from "./ButtonPad";
import Footer from "./Footer";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayVal: [0],
      displayOp: '',
      decimalFlag: false
    }
    this.buttonPress = this.buttonPress.bind(this);
    this.allClear = this.allClear.bind(this);
    this.clearEntry = this.clearEntry.bind(this);
  }

  buttonPress(val) {
    if (val === 'AC') {
      this.allClear();
    } else if (val === 'CE') {
      this.clearEntry();
    } else {
      this.showValues(val);
    }
  }

  showValues(val) {
    const displayArr = this.state.displayVal;
    if (val === '.') {
      if (!this.state.decimalFlag) {
        this.setState({ decimalFlag: true })
        displayArr.push(val);
      }
    } else if (displayArr.length === 1 && displayArr[0] === 0) {
      displayArr[0] = val;
    } else {
      displayArr.push(val);
    }
    this.setState({ displayVal: displayArr });
  }
  /* 
  - Switch statements to detect operators 
  */

  mainDisplay() {
    /* Display values in main calc display */
  }

  operationsDisplay() {
    /* Display values and operations in lower display */
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

