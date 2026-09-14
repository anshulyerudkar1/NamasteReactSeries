import { IMG_CDN_URL } from "../utils/constants.js";

const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;
  return (
    <div className="m-3 p-4 w-52 h-[420px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl text-center">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher order component

// input - RestaurantCard ==> RestaurantCardPromoted
export const withPrmotedLable = (RestuarantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg p-2 m-2">
          Promoted
        </label>
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;
