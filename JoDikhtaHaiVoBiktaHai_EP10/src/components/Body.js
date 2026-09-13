import { useEffect, useState } from "react";
import RestuarantCard from "./RestuarantCard.js";
import { CDN_URL, CROSORGPROXY_URL } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  // State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CROSORGPROXY_URL + CDN_URL + "listRestaurants");

    const json = await data.json();
    console.log("API Response:", json);

    // Extract restaurant list from API's nested response (data is double-nested: json.data.data)
    const restaurants =
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      [];
    console.log("Restaurants:", restaurants);
    setListOfRestaurant(restaurants);
    setFilteredListOfRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div>
        <h1>
          🔴 Looks like you're offline!! Please check your internet connection
          🔴
        </h1>
      </div>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="flex">
        <div className="search">
          <input
            type="text"
            className="ml-4 px-4 py-1 border border-solid border-black rounded-lg"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg border border-solid border-black"
            onClick={() => {
              console.log("Search button clicked");
              const filteredRestaurantList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredListOfRestaurant(filteredRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-1 bg-green-100 m-4 rounded-lg border border-solid border-black"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurant.map((restaurants) => (
          <Link
            key={restaurants?.info?.id}
            to={"restaurants/" + restaurants?.info?.id}
          >
            <RestuarantCard resData={restaurants?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
