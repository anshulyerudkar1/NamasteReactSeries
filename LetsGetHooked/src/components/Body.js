import RestuarantCard from "./RestuarantCard.js";

const Body = () => {

    const listOfRestaurants = [
        {
            data: {
                id: "334475",
                name: "KFC",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Biryani", "North Indian", "Asian"],
                avgRating: "3.8",
                deliveryTime: "38 minutes",
            }
        },
        {
            data: {
                id: "334476",
                name: "Dominos",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Biryani", "North Indian", "Asian"],
                avgRating: "4.4",
                deliveryTime: "38 minutes",
            }
        }
    ]

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button 
                    className="filter-btn" 
                        onClick={() => {
                        listOfRestaurants=listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        )
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((res) => (
                    <RestuarantCard key={res.data.id} resData={res?.data} />
                ))}
            </div>
        </div>
    );
 };

 export default Body;