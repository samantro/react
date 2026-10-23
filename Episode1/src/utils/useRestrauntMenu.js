import { useEffect } from "react";
const useRestrauntMenu = (restrauntId) => {
  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_MENU_API);

      console.log("Status:", response.status);
      console.log("Content-Type:", response.headers.get("content-type"));

      const text = await response.text();

      console.log("Actual Response:", text.slice(0, 500));

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const restaurantMenu = JSON.parse(text);

      console.log(restaurantMenu);
      return restaurantMenu;
    } catch (error) {
      console.error("Error:", error.message);
    }
    return null;
  };

  useEffect(() => {
    // Fetch restaurant menu based on restrauntId
    fetchData();
  }, [restrauntId]);
  return fetchData();

}

export default useRestrauntMenu;