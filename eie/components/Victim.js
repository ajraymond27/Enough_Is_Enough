import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const card = {
    border: 'none',
}

const pic ={
    width: 250,
    margin: '0 auto',
    borderRadius: '175px'
}

const description ={
    textAlign: "center",
    padding: '0px 10%'
}

export default class Victim extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>
        <Card style={card}>
            <Card.Img variant="top" src={this.props.victims.src} style={pic}/>
            <Card.Body>
            <Card.Text>
                <h4>{this.props.victims.name}</h4>
                <p style={description}>{this.props.victims.description}</p>
            </Card.Text>
            </Card.Body>
        </Card>

        <style jsx>{`
          /* desktop */
          @media (min-device-width:1224px) {

            }
          }
          /* large desktop screen */
          @media (min-device-width:1824px) {

            }
          }
          /* Small desktop screen */
          @media (max-width:1224px) {

            }
          }
          /* Tablet Device */
          @media (max-device-width:1224px) {
          @media (orientation: portrait) {

            }
          }
          @media (orientation: landscape) {

            }
          }
          }
          /* Mobile */
          @media (max-device-width:850px) {
          @media (orientation: portrait) {

            }
          }
          @media (orientation: landscape) {

            }
          }
          }
        
      `}</style>

      </>
    )
  }
}