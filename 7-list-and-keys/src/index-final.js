import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function ListItems(props){
    return <li>{props.value}</li>
}

function NumberList(props) {
  const listItems = props.list.map(number => <ListItems key={number.toString()} value={number}/>);
  return listItems;
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList list={numbers} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
