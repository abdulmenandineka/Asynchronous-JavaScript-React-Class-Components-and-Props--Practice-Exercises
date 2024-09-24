import React, { Component } from 'react'

export class ChilFooter extends Component {
  render() {
    return (
      <div>
        <li><a href="#">{this.props.content}</a></li>
      </div>
    )
  }
}

export default ChilFooter