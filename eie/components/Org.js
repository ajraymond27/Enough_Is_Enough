import React, { Component } from 'react';

const org = {
    textAlign: 'center',
}



export default class Org extends Component {
    constructor(props) {
      super(props);
    }
  
    render () {
      return (
        <>
          <span style={org}>{this.props.orgs.name}  &#9679; </span>
        </>
      )
    }
  }