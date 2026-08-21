import { useState, useEffect } from "react";
import RestuarantCard from "./RestuarantCard.js";
import { resList } from "../utils/mockData.js";

const Body = () => {

    // State Variable - Super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

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


    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestaurant(filteredList);
                        console.log(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((restaurants) => (
                    <RestuarantCard key={restaurants?.data.id} resData={restaurants?.data} />
                ))}
            </div>
        </div>
    );
 };

 export default Body;