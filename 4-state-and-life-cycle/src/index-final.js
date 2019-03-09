import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }  
  render() {
    return (
      <div>The current time is {this.state.date.toLocaleTimeString()}</div>
    );
  }
  componentDidMount() {
    this.timerID = setInterval(()=>{
        this.tick()
    },100)
    console.log(this.state.date);
  }
  componentWillUnmount() {
      clearInterval(this.timerID);  
  }
  tick(){
      const newDate = new Date();
      this.setState({date:newDate});
  }
}

ReactDOM.render(
     <Clock />
     , document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();