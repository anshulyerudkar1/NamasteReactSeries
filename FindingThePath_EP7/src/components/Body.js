import { useEffect, useState } from "react";
import RestuarantCard from "./RestuarantCard.js";
import { CDN_URL } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {

    // State Variable - Super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    //Normal JS Variable
    // let listOfRestaurants = [
    //     {
    //         data: {
    //             id: "334475",
    //             name: "KFC",
    //             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //             cuisines: ["Biryani", "North Indian", "Asian"],
    //             avgRating: "3.8",
    //             deliveryTime: "38 minutes",
    //         }
    //     },
    //     {
    //         data: {
    //             id: "334476",
    //             name: "Dominos",
    //             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //             cuisines: ["Biryani", "North Indian", "Asian"],
    //             avgRating: "4.4",
    //             deliveryTime: "38 minutes",
    //         }
    //     },
    //     {
    //         data: {
    //             id: "334477",
    //             name: "MCD",
    //             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //             cuisines: ["Biryani", "North Indian", "Asian"],
    //             avgRating: "4.2",
    //             deliveryTime: "38 minutes",
    //         }
    //     }
    // ];

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch (
            "https://corsproxy.io/?url=" + CDN_URL + "/listRestaurants"
        );

        const json =await data.json();
        console.log("API Response:", json);

        // Extract restaurant list from API's nested response (data is double-nested: json.data.data)
        const restaurants = 
            json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
            || json?.data?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            || [];
        console.log("Restaurants:", restaurants);
        setListOfRestaurant(restaurants);
        setFilteredListOfRestaurant(restaurants);
    }

    // const fetchData = async() => {
    //     const data = await fetch (
    //         "https://corsproxy.io/?url=" + CDN_URL
    //     );

    //     const json =await data.json();
    //     console.log("API Response:", json);

    //     // Extract restaurant list from API's nested response (data is double-nested: json.data.data)
    //     const restaurants = 
    //         json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
    //         || json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //         || [];
    //     console.log("Restaurants:", restaurants);
    //     setListOfRestaurant(restaurants);
    //     setFilteredListOfRestaurant(restaurants);
    // }

    // // Conditional Rendering
    // if(listOfRestaurant.length === 0){
    //     return <Shimmer />
    // }
    
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        placeholder="Search" 
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button 
                        className="search-btn"
                        onClick={() => {
                            console.log("Search button clicked");
                            const filteredRestaurantList = listOfRestaurant.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                            setFilteredListOfRestaurant(filteredRestaurantList)
                        }}
                    >
                        Search
                    </button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurant(filteredList);
                        console.log(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
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