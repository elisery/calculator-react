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
  }

  buttonPress(val) {
    if (val === 'AC') {
      this.allClear();
    } else if (val === 'CE') {
      this.clearEntry();
    } else if (this.isOperator(val)) {
      this.operationsDisplay(val);
    } else if (val === '=') {
      this.calculate();
    } else {
      this.mainDisplay(val);
    }
  }

  calculate() {
    let i = 0;
    let total = 0;
    let num1, num2, operator;
    let answerArr = [];
    const val = this.state.displayVal.join('');
    const opArr = this.state.displayOp;
    
    // If there is a value in main display push it to the lower display array
    if (val !== '') {
      opArr.push(val);
      this.setState({ displayOp: opArr });
    }
    // If last value in the lower display is an operator, pop it off
    if (this.isOperator(opArr[opArr.length-1])) {
      opArr.pop();
      this.setState({ displayOp: opArr });
    }

    while (i < opArr.length) {
      if (i === 0) {
        num1 = Number(opArr[i]);
        operator = opArr[i + 1];
        num2 = Number(opArr[i + 2]);
        total = this.getAnswer(num1, num2, operator);
        i += 3;
      } else {
        operator = opArr[i];
        num2 = Number(opArr[i + 1]);
        total = this.getAnswer(total, num2, operator);
        i += 2;
      }
    }
    String(total).length <= 18 ? answerArr.push(total) : answerArr.push('Digital Limit Met');
    this.setState({ 
      displayVal: answerArr,
      displayOp: [],
      decimalFlag: false 
    });
  }

  getAnswer(num1, num2, operator) {
    switch(operator) {
      case '+':
        return num1 + num2;
      case '-': 
        return num1 - num2;
      case '*': 
        return num1 * num2;
      case '/': 
        return num1 / num2;
      default: 
        return 0;
    }
  }

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
      // Check for display length limit
      displayArr.length <= 18 ? displayArr.push(val) : displayArr.push();
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
    this.setState({ 
      displayVal: [], 
      displayOp: [],
      decimalFlag: false 
    })
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

