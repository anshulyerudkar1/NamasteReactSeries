//import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// //////// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// //////// div with class “title”)

// // const header = React.createElement("div",
// //     {className:"title"},
// //     React.createElement("h1", 
// //     {id:"parentH1"}, "I am from h1"),
// //     React.createElement("h2", 
// //     {id:"parentH2"}, "I am from h2"),
// //     React.createElement("h3", {id:"parentH3"}, 
// //     "I am from h3"
// //     )
// // );


// ////////// Pass attributes into the tag in JSX
// const val=10000;



// ////////// Create the same element using JSX
// const headerEl = (
//     <div className="title">
//         <h1 id="parentH1">I am from h1</h1>
//         <h2 id="parentH2">I am from h2</h2>
//         <h3 id="parentH3">I am from h3</h3>
//     </div>
// )





// ////////// Create a functional component of the same with JSX

// const Header = () => {
//     return (
//         <div className="header">
//             <h1 id="parentH1">I am from h1</h1>
//             <h2 id="parentH2">I am from h2</h2>
//             <h3 id="parentH3">I am from h3</h3>
//         </div>
//     )
// }

// ////////// Composition of Component(Add a component inside another)
// ////////// ○ {TitleComponent} vs {<TitleComponent/>} vs
// ////////// {<TitleComponent></TitleComponent>} in JSX
// const TitleComponent = () => {
//     return (
//         <div className="title">
//             {val}
//             {headerEl}
//             {<Header />}
//             {<Header> </Header>}
//         </div>
//     )
// }


// ////////// Create a Header Component from scratch using Functional Components with
// ////////// JSX
// ////////// Add a Logo on left
// ////////// Add a search bar in middle
// ////////// Add User icon on right
// ////////// Add CSS to make it look nice
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://t3.ftcdn.net/jpg/03/65/42/00/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg" alt="Logo" className="logo-img" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Search" />
                <button id="searchBtn">Search</button>
            </div>
            <div className="userIcon">
                👤
            </div>
        </div>
    )
}

const rootRender = ReactDOM.createRoot(document.getElementById("root"));

rootRender.render(<Header />);