import ReactDOM from "react-dom/client";
import React from "react";


// React Element

const heading = React.createElement("h1", { id: "heading" }, "Hellow world from React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);