import React from "react";
import GrandChildUserClass from "./GrandChildUserClass";

class ChildUserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " ChildUserClass constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " ChildUserClass mounted");
  }

  render() {
    console.log(this.props.name + " ChildUserClass render");
    const { name } = this.props;
    return (
      <div className="user-container">
        <h1 className="user-name">Name: {name}</h1>
        <GrandChildUserClass name={"grandchild1"} />
      </div>
    );
  }
}


export default ChildUserClass;