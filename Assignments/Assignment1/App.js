// const root = document.getElementById("root");

// const heading = document.createElement("h1");
// heading.innerHTML = "Hellow world";
// root.appendChild(heading);

////// React

import ReactDOM from "react-dom/client";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("h1", null, "Hellow world");
root.render(heading);