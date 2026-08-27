import RestaurantCart from "./RestaurantCart";


const RestaurantList = ({RestList}) => {
    return (
        <div className="res-container">
            {RestList.map((res) => (
                <RestaurantCart key={res.data.id} resData={res} />
            ))}
        </div>
    )
}

export default RestaurantList