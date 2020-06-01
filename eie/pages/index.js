import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Link from '../components/NavLink';
import Footer from '../components/Footer';
import VictimScroller from '../components/VictimScroller';

const poster = {
  width: '100%',
  margin: '0 auto',
  textAlign: 'center',
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Enough Is Enough</title>
      </Head>
      <Header />
      <img src='./enough.jpg' style={poster}/>
      <VictimScroller />

      <footer>
        <Footer />
      </footer>
    </div>
  )
}