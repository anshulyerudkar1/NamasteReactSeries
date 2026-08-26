// // // // Build a Food Ordering App
// // // // ○ Think of a cool name for your app
// // // // ○ Build a AppLayout
// // // // ○ Build a Header Component with Logo & Nav Items & Cart
// // // // ○ Build a Body Component
// // // // ○ Build RestaurantList Component
// // // // ○ Build RestaurantCard Component
// // // // ○ Use static data initially
// // // // ○ Make your card dynamic(pass in props)
// // // // ○ Props - passing arguments to a function - Use Destructuring & Spread
// // // // operator
// // // // ○ Render your cards with dynamic data of restaurants
// // // // ○ Use Array.map to render all the restaurants


///////// NamasteFood
////// Header - add logo on left side then we need to add nav bar so inside that nav we required Home, Cart, About Us, Contact Us
////// Body - we required Restaurant component and RestaurantList component so there we render all the restaurant list in the body 

//import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const restaurants = [
    {
        "id": 1,
        "name": "The Italian Place",
        "cuisine": "Italian",
        "rating": 4.5,
        "image": "https://example.com/images/italian-place.jpg",
        "deliveryTime": "30-40 mins",
        "costForTwo": "₹1200"
    },
    {
        "id": 2,
        "name": "Spice Garden",
        "cuisine": "Indian",
        "rating": 4.2,
        "image": "https://example.com/images/spice-garden.jpg",
        "deliveryTime": "25-35 mins",
        "costForTwo": "₹800"
    },
    {
        "id": 3,
        "name": "Sushi Spot",
        "cuisine": "Japanese",
        "rating": 4.8,
        "image": "https://example.com/images/sushi-spot.jpg",
        "deliveryTime": "20-30 mins",
        "costForTwo": "₹1500"
    },
    {
        "id": 4,
        "name": "Taco Town",
        "cuisine": "Mexican",
        "rating": 4.1,
        "image": "https://example.com/images/taco-town.jpg",
        "deliveryTime": "35-45 mins",
        "costForTwo": "₹600"
    },
    {
        "id": 5,
        "name": "Burger Barn",
        "cuisine": "American",
        "rating": 4.3,
        "image": "https://example.com/images/burger-barn.jpg",
        "deliveryTime": "28-38 mins",
        "costForTwo": "₹900"
    }
];

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.logomaker.com/wp-content/uploads/2024/04/23144743/1-1.png" alt="logo" className="logo-img" />
                <label>NamasteFood</label>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = ({ restaurant }) => {

    const {name, cuisine, rating, image, deliveryTime, costForTwo} = restaurant;

    return (
        <div className="restaurant-card">
            <img src={image} alt={name} className="restaurant-image" />
            <h3>{name}</h3>
            <p>{cuisine}</p>
            <p>{rating}</p>
            <p>{deliveryTime}</p>
            <p>{costForTwo}</p>
        </div>
    )
}

const RestaurantList = () => {
    return (
        <div className="restaurant-list">
            {restaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <RestaurantList />
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const rootRender = ReactDOM.createRoot(document.getElementById("root"));
rootRender.render(<AppLayout />);