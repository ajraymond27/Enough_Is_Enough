import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Link from '../components/NavLink';
import Footer from '../components/Footer';
import VictimScroller from '../components/VictimScroller';

const poster = {
  width: '95%',
  margin: '0 auto',
  textAlign: 'center',
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

export default class Home extends React.Component {
  constructor(props) {
      super (props);
    }
    
  render() {
  return (
    <div className="container">
      <Head>
        <title>Enough Is Enough</title>
      </Head>
      <Header />
      <h1>Enough Is Enough</h1>
      <h4 style={{color: 'var(--base1)'}}>Friday June 5th | 3:00 PM ET</h4>
      <h4 style={{color: 'var(--base1)'}}>Bloomington Dunn Meadow</h4>
      {/* <h4>Dunn Meadow</h4>
      <h4>3:00 PM ET</h4> */}
      <div style={{marginBottom: 10}}>
        <p>Our mission is to create a space for those affected by these crimes against humanity. During times like this it can feel as if there is merely nothing we can do to express our anger, outrage, and emotions for the unjust treatment of Black bodies in America. Police enforcement, government officials, and leaders of this country constantly misuse their power and there doesn’t seem to be an end in sight. When will our voices be heard. When will change occur? HOW MANY MORE PEOPLE HAVE TO DIE for law and order to actually exist, not only for white people. Our goal is to come together and use our action plan while practicing social distancing due to COVID-19, to ensure black bodies are united and supported by the city of Bloomington as well as The Bloomington Police Force.</p>
        <VictimScroller />
        <div style={{margin: '0 auto', textAlign: 'center', }}>
          <a href="/agenda"><button style={button}>Agenda</button></a>
          <a href="/donate"><button style={button}>Donate</button></a>
          <a href="/about"><button style={button}>About</button></a>
        </div>
      
        {/* <img src='./poster_cropped.jpg' style={poster}/> */}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
} 
}