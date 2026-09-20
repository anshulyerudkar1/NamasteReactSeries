import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  //let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscibing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50">
      <div className="flex items-center ml-1">
        <img
          className="w-24"
          src="https://static.wixstatic.com/media/f49831_c088c1f33a1f4ec08509f355f9627fde~mv2.jpg/v1/fill/w_912,h_912,al_c,q_85/file.jpg"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-6 py-2">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="ml-1 px-6 py-2 border border-solid border-gray-200 rounded-lg bg-orange-300">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-1 px-6 py-2 border border-solid border-gray-200 rounded-lg bg-orange-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="ml-1 px-6 py-2 border border-solid border-gray-200 rounded-lg bg-orange-300">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="ml-1 px-6 py-2 border border-solid border-gray-200 rounded-lg bg-orange-300">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="ml-1 px-6 py-2 border border-solid border-gray-200 rounded-lg bg-orange-300">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="ml-1 px-4  border border-solid border-gray-200 rounded-lg bg-orange-300"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>

          {/* resolving props drilling using Context API */}
          <li className="ml-1 px-6 py-2 border border-solid border-gray-200 rounded-lg bg-orange-300">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
