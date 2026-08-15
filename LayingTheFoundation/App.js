import ReactDOM from "react-dom/client";
import React from "react";


// React Element

// const heading = React.createElement("h1", { id: "heading" }, "Hellow world from React");

// const jsxHedding = <h1 id="heading">Hellow world from jsx</h1>;


// const fn = () => true;

// const fn2 = () => {
//     return true;
// }

// React Component (function component)
// const Title = () => (
//     <h1 className="head" tabIndex="5">
//         Namaste Kolhapuri Dev
//     </h1>
// )

// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <h1 className="heading">Hello world from component</h1>
//     </div>
// )

//// React element inside component
const title = (
    <h1 className="head" tabIndex="5">
        Namaste Kolhapuri Dev
    </h1>
)

const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">Hello world from component</h1>
    </div>
)

// const divComponent = (<div>
//     <HeadingComponent/>
// </div>)

const divComponent = (<div>
    {HeadingComponent()}
</div>)

const HeadingComponent1 = () => <h1>Hellow world from component</h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHedding);
root.render(divComponent);