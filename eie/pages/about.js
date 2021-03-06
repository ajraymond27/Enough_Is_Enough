import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import OrgSection from '../components/OrgSection';
import { SocialIcon } from 'react-social-icons';


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

const social = {
  width: '50px',
  height: '50px',
  marginRight: 10,
}

export default class About extends React.Component {
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
      <p>In light of recent events in regards to the killing of black people by police officers, the community of Bloomington has decided to take a stand for our brothers and sisters. </p>
      <h4>Organizers</h4>
      <CardGroup>
        <Card style={card}>
          <Card.Img variant="top" src="./selena.jpg" style={pic}/>
          <Card.Body>
            <Card.Title><h4>Selena Drake</h4></Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
              Senior at Indiana University Bloomington studying Law and Public Policy            
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Img variant="top" src="salina.jpg" style={pic}/>
          <Card.Body>
            <Card.Title><h4>Salina Tesfagiorgis</h4></Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
              Hamilton Lugar School of Global and International Studies BA/MA Student whose passion is the betterment of Humanity
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <h4>Connect With Us</h4>
        <Card style={card}>
            <Card.Body>
              <Card.Text style={{textAlign: 'center'}}>
                <SocialIcon url="https://www.instagram.com/_theenoughfund/?hl=en" target="_blank" bgColor='var(--base2)' style={social}/>
                <p>Contact <a href="https://www.instagram.com/_theenoughfund/?hl=en" target="_blank">@_theenoughfund </a> on Instagram with all questions and inquiries. Thank you!</p>       

                <SocialIcon url="https://www.facebook.com/enoughbtown/" target="_blank" bgColor='var(--base2)' style={social}/>
                <p>Find event updates, photos, and more on our Facebook page: <a href="https://www.facebook.com/enoughbtown/" target="_blank">Enough is Enough</a></p>   
                
                {/* <SocialIcon url="https://bloomington.in.gov/inclusion/black-history-month" bgColor='var(--base2)' style={social}/>
                <p>Discover black owned businesses and find more ways to get involved here: <a href="https://bloomington.in.gov/inclusion/black-history-month">Black 	&amp; Blooming</a></p>            */}
        
              </Card.Text>
            </Card.Body>
          </Card>

      <h4>Spread The Word</h4>
      <div style={{width: '100%', textAlign: 'center'}}>
        <img src="./flyers/juneteenth.jpg" style={{width:'350px', margin: '0 auto', textAlign: 'center'}}></img>
      </div>
      {/* <CardGroup>
        <Card style={card}>
          <Card.Img variant="top" src="./flyers/juneteenth.jpg" style={{width:'350px'}}/>
        </Card>
      </CardGroup> */}

      {/* <h4>Supporting Organizations</h4>
      <OrgSection /> */}
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
}