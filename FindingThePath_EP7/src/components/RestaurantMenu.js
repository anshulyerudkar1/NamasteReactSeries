import { useEffect, useState } from "react";
import { CDN_URL, CROSORGPROXY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    //console.log(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            CROSORGPROXY_URL + CDN_URL + "/listRestaurantMenu/" + resId
        );

        const jsonData = await data.json();
        //console.log(jsonData);
        setResInfo(jsonData);
    };

    if(resInfo === null) return <Shimmer /> ;

    const {name, cuisines, costForTwoMessage } = resInfo?.data?.cards?.[2]?.card?.card?.info || {};

    const {itemCards} = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card.card || {};

    //console.log(itemCards);


    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - RS {item.card.info.price/100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;