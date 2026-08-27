import RestaurantCart from "./RestaurantCart";
import { resList } from "../utils/mokData";

const RestaurantList = () => {
    return (
        <div className="res-container">
            {resList.map((res) => (
                <RestaurantCart key={res.data.id} resData={res} />
            ))}
        </div>
    )
}

export default RestaurantList