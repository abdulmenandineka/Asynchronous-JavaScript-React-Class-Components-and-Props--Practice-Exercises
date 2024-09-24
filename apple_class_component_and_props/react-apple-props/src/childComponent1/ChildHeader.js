import React from "react";

class ChildHeader extends React.Component {
  render() {
    return (
      <>
        <li>
          <a href={this.props.href}>{this.props.content}</a>
        </li>
      </>
    );
  }
}

export default ChildHeader;


