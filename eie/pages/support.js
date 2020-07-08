import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


export default class Donate extends React.Component {
  constructor(props) {
      super (props);
    }
    
  render() {
  return (
    <div className="container">
      <Head>
        <title>Support</title>
      </Head>
      <Header />
      <h1>Support</h1>
      {/* <p>We are proud to announce that we are taking donations for two causes local and across state lines to create unity in our community.</p> */}

      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
}