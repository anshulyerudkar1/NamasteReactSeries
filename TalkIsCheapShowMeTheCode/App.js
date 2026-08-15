/**
 * Header
 * 
 *   logo
 *   nav
 * Body
 * 
 *   Search
 *   Restaurant List
 *   - Restaurant Card
 * 
 * Footer
 *   Copyright
 *   Links
 *   Address
 *   Contact
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

 const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src="https://static.wixstatic.com/media/f49831_c088c1f33a1f4ec08509f355f9627fde~mv2.jpg/v1/fill/w_912,h_912,al_c,q_85/file.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
 };

 const RestuarantCard = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img 
                className="res-logo" 
                alt='res-logo'
                src="https://static.wixstatic.com/media/f49831_c088c1f33a1f4ec08509f355f9627fde~mv2.jpg/v1/fill/w_912,h_912,al_c,q_85/file.jpg"
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.stars} stars</h4>
            <h4>{props.time}</h4>
            {/* <h4>250 for two</h4> */}
        </div>
    );
 };

 const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestuarantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian" stars="4.4" time="38 minutes"/>
                <RestuarantCard resName="KFC" cuisine="Fast food, Lolipop, Chiken, Fries" stars="4.4" time="38 minutes"/>
            </div>
        </div>
    );
 };
 
 const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
 };

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

const styleCard = {
    backgroundColor: "#f0f0f0"
}