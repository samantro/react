const Card = ({card}) => {
  const {logo, title, subtitle, rating, time} = card;
  return (
    <div className="card-container">
      <img className="card-logo" src={logo} alt="Card Logo" />
      <h3 className="card-title">{title}</h3>
      <h4 className="card-subtitle">{subtitle}</h4>
      <h4 className="card-rating">{rating} stars</h4>
      <h4 className="card-time">{time} minuts</h4>
    </div>
  );
}

export default Card;