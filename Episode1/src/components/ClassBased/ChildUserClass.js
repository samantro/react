import React from "react";
import GrandChildUserClass from "./GrandChildUserClass";

class ChildUserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { name } = this.props;
    return (
      <div className="user-container">
        <h1 className="user-name">Name: {name}</h1>
      </div>
    );
  }
}


export default ChildUserClass;