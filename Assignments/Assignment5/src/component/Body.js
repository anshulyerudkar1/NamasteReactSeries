import RestaurantList from "./RestaurantList";
import {useState} from "react";

const Body = () => {
    const [resList, setResList] = useState([]);
    return (
        <div className="body">
            <div className="search">
                {/* <input type="text" className="search-box" placeholder="Search Restaurant" />
                <button className="search-btn">Search</button> */}
            </div>  
            <RestaurantList />
        </div>
    )
}

export default Body;