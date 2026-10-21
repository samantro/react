const User = ({ name }) => {
  return (
    <div className="user-container">
      <h1 className="user-name">Name: {name}</h1>
      <h2 className="user-age">Age: 25</h2>
      <h3 className="user-location">Location: Delhi</h3>
      <h4 className="user-email">Email: vishal@example.com</h4>
    </div>
  );
};

export default User;