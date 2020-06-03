import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const card = {
    border: 'none',
    boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)',
    marginBottom: '10px',
}

const pic ={
    width: 200,
    margin: '0 auto',
}

export default class Org extends Component {
    constructor(props) {
      super(props);
    }
  
    render () {
      return (
        <>
          <Card style={card}>
              <Card.Img variant="top" src={this.props.orgs.src} style={pic}/>
              <Card.Body>
              <Card.Text>
                  <h4>{this.props.orgs.name}</h4>
              </Card.Text>
              </Card.Body>
          </Card>
        </>
      )
    }
  }