// const root = document.getElementById("root");

// const heading = document.createElement("h1");
// heading.innerHTML = "Hellow world";
// root.appendChild(heading);

////// React

import ReactDOM from "react-dom/client";
import React from "react";

const heading = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "h1",
        { id: "heading" },
        "Hellow world from React")
);

const root = ReactDOM.createRoot(document.getElementById("root"));


console.log(heading); //  -> it will return an object not an HTML element
root.render(heading);