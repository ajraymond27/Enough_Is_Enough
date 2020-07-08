import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Link from '../components/NavLink';
import Footer from '../components/Footer';
import VictimScroller from '../components/VictimScroller';

const eie ={
  height: '80vh',
  paddingTop: '55vh',
  backgroundImage: 'url("./index.jpg")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundColor: '#000',
}

const button ={
  background: 'var(--base2)',
  borderRadius: '10px',
  border: 'none',
  color: 'var(--white)',
  fontWeight: 'bold',
  width: '200px',
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
        <title>Juneteenth Celebratory Protest</title>
      </Head>
      <Header />
      <div style={eie}>
        <div style={{backgroundColor: '#000', opacity: 0.75, height: '100%'}}>
          <h1 style={{color: '#fff'}}>Enough Is Enough</h1>
          <h4 style={{color: 'var(--base1)'}}>We must end racism and institutional oppression by uplifting black leadership, business, and art in our local communities</h4>
        </div>
      </div>
      <div style={{marginBottom: 10}}>
        {/* <VictimScroller /> */}
        <div style={{margin: '0 auto', textAlign: 'center', }}>
          <a href="/donate"><button style={button}>Donate</button></a>
          <a href="/support"><button style={button}>Support</button></a>
          <a href="/events"><button style={button}>Events</button></a>
          <a href="/about"><button style={button}>About</button></a>
        </div>
      
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
} 
}