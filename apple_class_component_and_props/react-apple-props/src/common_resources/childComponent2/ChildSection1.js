import React from 'react'
// import ParentSection1 from '../parentComponent/ParentSection1'
export class ChildSection1 extends React.Component {
  render() {
    return (
      <>
        <div ><h1>{this.props.content}</h1></div>
        
      </>
    )
  }
  
}

export default ChildSection1