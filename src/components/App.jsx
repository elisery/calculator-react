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
      displayOp: [],
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
    } else if (this.isOperator(val)) {
      /*
      1. add to displayOp and clear display val 
      */
    } else {
      this.mainDisplay(val);
    }
  }

  /* 
  - function to handle operations and equals
  */

  isOperator(val) {
    switch(val) {
      case '-':
        return true;
      case '+':
        return true;
      case '*':
        return true;
      case '/':
        return true;
      default:
        return false;
    }
  }

  mainDisplay(val) {
    /* Display values in main calc display */
    const displayArr = this.state.displayVal;
    const displayOpArr = this.state.displayOp;
    /*
     
    */
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

