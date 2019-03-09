import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function tick(){
    const element =( 
      <div>
        The current time is {new Date().toLocaleTimeString()}
      </div>);
    ReactDOM.render(
      element,
      document.querySelector("#root")
    )
  }
  
  setInterval(tick,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();