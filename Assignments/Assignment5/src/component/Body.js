import RestaurantList from "./RestaurantList";
import {useState} from "react";
import { resList } from "../utils/mokData";

const Body = () => {
    const [restList, setRestList] = useState(resList ?? []);
    const [filteredResList, setFilteredResList] = useState(restList ?? []);
    const [searchText, setSearchText] = useState("");
    return (
        <div className="body">  
            <div className="search">
                <input value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }} type="text" className="search-box" placeholder="Search Restaurant" />
                <button 
                    className="search-btn" 
                    onClick={() => {
                        const filterdList = restList.filter(
                            (res) => {
                                return res.data.name.toLowerCase().includes(searchText.toLowerCase()) || 
                                    res.data.cuisines.some((cuisine) => 
                                        cuisine.toLowerCase().includes(searchText.toLowerCase())
                                    );
                            }
                        )
                        setFilteredResList(filterdList);
                    }}
                >
                    Search
                </button>
            </div>
            <RestaurantList RestList={filteredResList}/>
        </div>
    )
}

export default Body;