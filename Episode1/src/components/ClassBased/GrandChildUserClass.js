import React from "react";

class GrandChildUserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.name + " GrandChildUserClass mounted");
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

export default GrandChildUserClass;