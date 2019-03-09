import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class app extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Name value="PADC"/>
          <img src={logo} class="App-logo" alt="logo" />
          <p>
            {this.props.name} - {this.props.job}
          </p>       
        </header>
      </div>
    );
  }
}

function Name(props){
  //props.value = "Thet Hlaing";
  return <h1>{props.value}</h1>
}

// function App(props){
//   return <h1>Hello {props.name}</h1>
// }

export default app;
