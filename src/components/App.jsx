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
      this.operationsDisplay(val);
    } else {
      this.mainDisplay(val);
    }
  }

  /* 
  - function to handle equals
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

  operationsDisplay(val) {
    /* Display values and operations in lower display */
    const newVal = this.state.displayVal.join('');
    const opArr = this.state.displayOp;
    // If last value in array is an operator & there is no number to append, 
    // swap old operator with new one
    if (this.isOperator(opArr[opArr.length-1]) && newVal === '') {
      opArr.pop();
      opArr.push(val);
    } else {
      opArr.push(newVal);
      opArr.push(val);
    }
    this.setState({ displayOp: opArr });
    this.setState({ displayVal: [] });
  }

  allClear() {
    this.setState({ displayVal: [], displayOp: [] })
  }

  clearEntry() {
    const displayArr = this.state.displayVal;
    const displayOpsArr = this.state.displayOp;
    if (displayArr.join('') === '') {
      displayOpsArr.pop();
      this.setState({ displayOp: displayOpsArr });
    } else  {
      displayArr.pop();
      this.setState({ displayVal: displayArr });
    }
  }

  render() {
    const { displayVal, displayOp } = this.state;

    return(
      <div>
        <main className="main-layout main-shadow main-border">
          <Display mainValue={displayVal} opValue={displayOp}/>
          <ButtonPad onButtonDisplayClick={this.buttonPress}/>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;

