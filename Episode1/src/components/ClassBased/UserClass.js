import React from "react";
import ChildUserClass from "./ChildUserClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      edit: false
    }
    console.log(this.props.name + " UserClass constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " UserClass mounted");
  }

  render() {
    const { name } = this.props;
    console.log(name + " UserClass render");
    return (
      <div className="user-container">
        <div className="count-container">
          <p className="count">Count: {this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment Count</button>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement Count</button>
          <button onClick={() => this.setState({ count: 0, edit: false })}>Reset</button>
        </div>
        <div className="edit-mode-container">
          <p className="edit-mode">Edit Mode: {this.state.edit ? "On" : "Off"}</p>
          <button onClick={() => this.setState({ edit: !this.state.edit })}>Toggle Edit Mode</button>
        </div>
        <h1 className="user-name">Name: {name}</h1>
        <h2 className="user-age">Age: 25</h2>
        <h3 className="user-location">Location: Delhi</h3>
        <h4 className="user-email">Email: vishal@example.com</h4>
        <ChildUserClass name={"child1"} />
        <ChildUserClass name={"child2"} />
        <ChildUserClass name={"child3"} />
      </div>
    );
  }
}

export default UserClass;