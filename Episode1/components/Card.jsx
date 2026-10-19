const Card = ({card}) => (

    <div className="card-container">
      <img className="card-logo" src={card.logo} alt="Card Logo" />
      <h3 className="card-title">{card.title}</h3>
      <h4 className="card-subtitle">{card.subtitle}</h4>
      <h4 className="card-rating">{card.rating} stars</h4>
      <h4 className="card-time">{card.time} minuts</h4>
    </div>
  );

export default Card;