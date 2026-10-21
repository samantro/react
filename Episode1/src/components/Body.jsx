import Card from "./Card";
import CardData from "../utils/cardData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfResturents, setListOfResturents] = useState(CardData);
  const [searchText, setSearchText] = useState("");
  const [filteredResturents, setFilteredResturents] = useState(CardData);
  

  return (
    <div>
      <div className="button-container">
        <div className="search-container">
          <input type="text" className="search-input" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={() => {
            const filtered = listOfResturents.filter(card => card.title.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredResturents(filtered);
          }}>Search</button>
        </div>
        <button className="top-rated-button" onClick={() => { 
          const topRated = CardData.filter(card => card.rating >= 4.5);
          setFilteredResturents(topRated);
         }}>Top rated restaurants</button>
         <button className="all-restaurants-button" onClick={() => { 
          setFilteredResturents(CardData);
         }}>All restaurants</button>
      </div>
      <div className="card-list">
        {filteredResturents.map((card) => <Card key={card.id} card={card} />)}
      </div>
    </div>
  );
};
export default Body;