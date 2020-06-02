import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


export default function Donate() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <h1>About</h1>

      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}