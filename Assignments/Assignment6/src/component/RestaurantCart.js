const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card">
      <img src=" " alt="" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h5>Rating</h5>
    </div>
  );
};

export default RestaurantCard;
