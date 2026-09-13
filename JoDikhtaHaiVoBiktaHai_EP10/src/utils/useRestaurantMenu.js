import { useEffect, useState } from "react";
import { CROSORGPROXY_URL, CDN_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      CROSORGPROXY_URL + CDN_URL + "/listRestaurantMenu/" + resId,
    );
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
