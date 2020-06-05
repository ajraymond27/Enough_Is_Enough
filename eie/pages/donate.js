import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const img ={
  width: 200,
  margin: '0 auto',
}

const card ={
  border: 'none',
  boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)',
  marginBottom: '10px',
}

const button ={
  background: 'var(--base2)',
  borderRadius: '10px',
  border: 'none',
  color: 'var(--white)',
  fontWeight: 'bold',
  width: '250px',
  padding: 15,
  margin: 10,
  textAlign: 'center',
}

export default class Donate extends React.Component {
  constructor(props) {
      super (props);
    }
    
  render() {
  return (
    <div className="container">
      <Head>
        <title>Donate</title>
      </Head>
      <Header />
      <h1>Donate</h1>
      <p>We are proud to announce that we are taking donations for two causes local and across state lines to create unity in our community.</p>

      <Card style={card}>
          <Card.Img variant="top" src="./shirt.jpg" style={img}/>
          <Card.Body>
            <Card.Title><h4>T-Shirt Fundraiser</h4></Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
              <p>A limited supply of shirts will be available in Dunn Meadow Friday afternoon. Once they run out, place a pre-order here and we will deliver you the shirt at a later time!</p>
              <a href="https://enoughbtown.myshopify.com/"><button style={button}>Pre-Order Shirt Here!</button></a>

            </Card.Text>
          </Card.Body>
        </Card>

      <p>
        <span style={{fontWeight: 'bold'}}>The Banneker Community Center</span> <span style={{marginBottom: '10px'}}>is an organization that has opened its arms as a space for black youth in Bloomington. By fundraising for this organization, we hope to promote empowerment for our future leaders. Black youth are young witnesses to the crimes against black people. This protest is one that not only is to inform but to empower. One way we believe we can empower is having this protest have immediate results that can directly impact the black community of Bloomington. </span>
      </p>
      <p>
        <span style={{fontWeight: 'bold'}}>The Enough Is Enough 2020 Fund </span> <span style={{marginBottom: '10px'}}>was created to help unite the Black Community in our fight against racial injustices. During this time of recession, anger, hatred, and confusion many Black businesses face hardships due to protest that have become violent. The goal of this fund is to protect and restore Black Businesses affected by the fight against police brutality/killings. </span>     
      </p>
      <CardGroup>
      <Card style={card}>
          <Card.Img variant="top" src="./cash.jpg" style={img}/>
          <Card.Body>
            <Card.Title><h4>Cash App</h4></Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
              Scan this code or Cash App $EnoughIsEnough2020. Please specify which fund you want to contribute to in the description.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Img variant="top" src="spotfund.png" style={img}/>
          <Card.Body>
            <Card.Title><h4>*spotfund</h4></Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
              Click the following link to complete your donation:    
              <a href="https://www.spotfund.com/story/70c3d72c-dc07-413f-b6f2-a1c8ecb7d7cd?referral_id=83b23813-5259-4603-a162-4a6a6fb1abbf" >  www.spotfund.com</a>
              <br/>Please specify which fund you want to contribute to in the description.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Img variant="top" src="./bakery.png" style={img}/>
          <Card.Body>
            <Card.Title><h4>Rainbow Bakery</h4></Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
              Click the following link to complete your donation:    
              <a href="https://rainbow-bakery.square.site/product/enough-is-enough-fund/132?fbclid=IwAR2CaDgVZb4K0ZMTk0W-kszdXCWxX6kksKJj1VQQCj2N1TUPFtZnnOrm8QM" >  rainbow-bakery.square.site</a>
              <br/>Please specify which fund you want to contribute to in the description.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
}