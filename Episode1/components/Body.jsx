import Card from "./Card";
import CardData from "../CardData";

const Body = () => {
  return (
    <div>
      <h2>Welcome to our website!</h2>
      <div className="card-list">
        {CardData.map((card) => 
          <Card key={card.id} card={card} />
        )}
      </div>
    </div>
  );
};
export default Body;