import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCart";
import { CDN_URL } from "../constents/constent";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?key=YOUR_API_KEY&url=" + CDN_URL,
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="body">
      <div className="res-container">{}</div>
    </div>
  );
};

export default Body;
