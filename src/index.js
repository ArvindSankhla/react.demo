import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
let css = {};

if (curDate >= 1 && curDate < 12) {
  greeting = " Good Morning";
  css.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = " Good Afternoon";
  css.color = "orange";
} else {
  greeting = " Good Night";
  css.color = "Black";
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div>
      <h1>
        Hello Sir , <span style={css}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
