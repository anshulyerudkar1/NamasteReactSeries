

const RestaurantCart = ( {resData} ) => {
    const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData.data;

    return (
        <div className="res-card">
            <img className="res-logo" src={cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCart