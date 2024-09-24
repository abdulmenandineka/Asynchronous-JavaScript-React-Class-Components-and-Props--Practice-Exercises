import React, { Component } from "react";
// import ParentSection2 from "../parentComponent/ParentSection2";
class ChildSection2 extends Component {
  render() {
    return (
      <>
        <div>
          <h1>{this.props.content}</h1>
        </div>
        ;
      </>
    );
  }
}

export default ChildSection2;
