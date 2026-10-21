import User from "./User";
import UserClass from "./ClassBased/UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">This is the About page of our restaurant app.</p>
      <User name={"Vishal Verma (Function Component)"} />
      <UserClass name={"Parent"} />
    </div>
  );
};

export default About;