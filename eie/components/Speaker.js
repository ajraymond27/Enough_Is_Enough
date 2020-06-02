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
    borderRadius: '175px'
}

const title ={
    textAlign: "center",
    // padding: '0px 10%'
}

export default class Speaker extends Component {
    constructor(props) {
      super(props);
    }
  
    render () {
      return (
        <>
          <Card style={card}>
              <Card.Img variant="top" src={this.props.speakers.src} style={pic}/>
              <Card.Body>
              <Card.Text>
                  <h4>{this.props.speakers.name}</h4>
                  <p style={title}>{this.props.speakers.title}</p>
              </Card.Text>
              </Card.Body>
          </Card>
        </>
      )
    }
  }