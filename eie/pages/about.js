import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const card ={
  border: 'none',
  boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)',
  marginBottom: '10px',
}

const pic ={
  width: 200,
  margin: '0 auto',
  borderRadius: '175px'
}

export default class VidScroller extends React.Component {
  constructor(props) {
      super (props);
    }
    
  render() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <h1>About</h1>
      <p>In light of recent events in regards to the killing of Black men by police officers, the community of Bloomington has decided to take a stand for our brothers and sisters. </p>
      <h4>Organizers</h4>
      <CardGroup>
        <Card style={card}>
          {/* <Card.Img variant="top" src="./selena.jpg" style={pic}/> */}
          <Card.Body>
            <Card.Title><h4>Selena Drake</h4></Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
              Senior at Indiana University Bloomington studying Law and Public Policy            
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={card}>
          {/* <Card.Img variant="top" src="salina.jpg" style={pic}/> */}
          <Card.Body>
            <Card.Title><h4>Salina Tesfagiorgis</h4></Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
              Hamilton Lugar School of Global and International Studies BA/MA Student who's passion is the betterment of Humanity
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <h4>Connect With Us</h4>
      <p>instagram, emails</p>

      <h4>Supporting Orgs scroller</h4>

      <h4>Media</h4>

      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
}