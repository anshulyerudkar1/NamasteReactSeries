import ItemList from "./ItemList";
import { useState } from "react";

const RestauranCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };

  //console.log(data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* Header - This is UI Layer */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Accordion Body - This is data layer */}
        {showItems && <ItemList key={data?.title} items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestauranCategory;
