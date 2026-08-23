import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    //let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");

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
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button 
                        className="login" 
                        onClick={
                            () => {
                                btnName === "Login" ? 
                                setBtnName("Logout") :
                                setBtnName("Login")
                            }
                        }
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
 };

 export default Header;