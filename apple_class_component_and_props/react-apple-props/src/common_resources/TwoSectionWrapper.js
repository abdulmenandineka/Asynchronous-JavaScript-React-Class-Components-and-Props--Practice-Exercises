import React, { Component } from 'react'
import ParentSection1 from './parentComponent2/ParentSection1'
import ParentSection2 from './parentComponent2/ParentSection2'

 class AllSectionWrapper extends Component {
  render() {
    return (
      <div>
        <ParentSection1/>
        <ParentSection2/>
      </div>
    )
  }
}

export default AllSectionWrapper