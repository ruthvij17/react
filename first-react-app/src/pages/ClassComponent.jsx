import React from "react";
import BaseHOC from "../HOC/BaseHOC";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "DevTown",
      age: 5,
    };
  }
  render() {
    return (
      <>
        <p>This is class componentsssss</p>
      </>
    );
  }
}

export default BaseHOC(ClassComponent);
