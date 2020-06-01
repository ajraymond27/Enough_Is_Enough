import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Victim extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>
        <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
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