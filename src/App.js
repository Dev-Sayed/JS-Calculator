import React from 'react';
import './App.css'

let evalString = "";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayItem: 0,
      previousInput: 0,
      previousOutput: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    switch (e.target.innerText) {
      case ".":
        if (this.state.previousOutput !== 0) {
          evalString = String(this.state.previousOutput);
        }
        if(evalString.length === 0) {
          evalString = '0';
        }
        let myFirstArray = evalString.split("");
        let mySecondArray = [];
        let myThirdArray = ["+", "-", "*", "/"]
        for(let i=myFirstArray.length - 1; i>=0; i--) {
          if(myThirdArray.includes(myFirstArray[i])) {
            break;
          } else {
            mySecondArray.unshift(myFirstArray[i]);
          }
        }
        if(!mySecondArray.includes('.')) {
          evalString += ".";
          this.setState({
            previousInput: e.target.innerText,
            displayItem: evalString,
            previousOutput: 0
          });
        }
        break;
      case "0":
        if(this.state.previousInput === "=") {
          evalString = "";
        }
        if(!(evalString.length === 1 && evalString[0] === "0")) {
         evalString += e.target.innerText; 
        }
        this.setState({
          previousInput: e.target.innerText,
          displayItem: evalString,
          previousOutput: 0
        });
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if(this.state.previousInput === "=") {
          evalString = "";
        }
        evalString += e.target.innerText;
        this.setState({
          previousInput: e.target.innerText,
          displayItem: evalString,
          previousOutput: 0
        });
        break;
      case "+":
        if (this.state.previousOutput !== 0) {
          evalString = String(this.state.previousOutput);
        }
        let myArray = evalString.split("");
        for(let i=myArray.length - 1; i>=0; i--) {
          if (Number.isNaN(Number(myArray[i]))) {
            myArray.pop();
          } else {
            break;
          } 
        }
        evalString = myArray.join("");
        evalString += "+";
        this.setState({
          previousInput: e.target.innerText,
          displayItem: evalString
        });
        break;
      case "-":
        if (this.state.previousOutput !== 0) {
          evalString = String(this.state.previousOutput);
        }
        evalString += "-";
        this.setState({
          previousInput: e.target.innerText,
          displayItem: evalString
        });
        break;
      case "×":
        if (this.state.previousOutput !== 0) {
          evalString = String(this.state.previousOutput);
        }
        let myArray2 = evalString.split("");
        for(let i=myArray2.length - 1; i>=0; i--) {
          if(Number.isNaN(Number(myArray2[i]))) {
            myArray2.pop();
          } else {
            break;
          }
        }
        evalString = myArray2.join("");
        evalString += "*";
        this.setState({
          previousInput: e.target.innerText,
          displayItem: evalString
        });
        break;
      case "÷":
        if (this.state.previousOutput !== 0) {
          evalString = String(this.state.previousOutput);
        }
        let myArray3 = evalString.split("");
        for(let i=myArray3.length - 1; i>=0; i--) {
          if(Number.isNaN(Number(myArray3[i]))) {
            myArray3.pop();
          } else {
            break;
          }
        }
        evalString = myArray3.join("");
        evalString += "/";
        this.setState({
          previousInput: e.target.innerText,
          displayItem: evalString
        });
        break;
      case "=":
        this.setState({
          previousInput: e.target.innerText,
          displayItem: (this.state.displayItem === 0) ? 0 : eval(evalString),
          previousOutput: (this.state.displayItem === 0) ? 0 : eval(evalString)
        });
        break;
      case "C":
        evalString = "";
        this.setState({
          previousInput: e.target.innerText,
          displayItem: 0,
          previousOutput: 0
        });
        break;
      default:
        break;
    }
  }
  render() {
    return(
      <div class="calculator" id="calculator">
        <div class="calculator-display">
            <h1 id="display">{this.state.displayItem}</h1>
        </div>
        <div class="calculator-buttons">
            <button onClick={this.handleClick} id="add" className="operator" value="+">+</button>
            <button onClick={this.handleClick} id="subtract" className="operator" value="-">-</button>
            <button onClick={this.handleClick} id="multiply" className="operator" value="*">×</button>
            <button onClick={this.handleClick} id="divide" className="operator" value="/">÷</button>
            <button onClick={this.handleClick} id="seven" value="7">7</button>
            <button onClick={this.handleClick} id="eight" value="8">8</button>
            <button onClick={this.handleClick} id="nine" value="9">9</button>
            <button onClick={this.handleClick} id="four" value="4">4</button>
            <button onClick={this.handleClick} id="five" value="5">5</button>
            <button onClick={this.handleClick} id="six" value="6">6</button>
            <button onClick={this.handleClick} id="one" value="1">1</button>
            <button onClick={this.handleClick} id="two" value="2">2</button>
            <button onClick={this.handleClick} id="three" value="3">3</button>
            <button onClick={this.handleClick} id="decimal" className="decimal" value=".">.</button>
            <button onClick={this.handleClick} id="zero" value="0">0</button>
            <button onClick={this.handleClick} id="clear" className="clear">C</button>
            <button onClick={this.handleClick} id="equals" className="equal-sign operator" value="=">=</button>
        </div>
    </div>
    );
  }
}

export default App;