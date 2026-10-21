import { useState,useEffect } from "react";
const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
  try {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6146913&lng=77.40181199999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    let data = await response.json();
    data = data.data.cards.filter(card => card?.card?.card?.info);
    console.log("Filtered data:", data);
    setMenu(data);
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};

  return (
    <div className="restaurant-menu-container">
      <h1>{menu[0]?.card?.card?.info?.name}</h1>
      <h2>Restaurant Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Paneer Butter Masala</li>
        <li>Chicken Curry</li>
        <li>Dal Makhani</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;