import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Link from '../components/NavLink';
import Footer from '../components/Footer';
import VictimScroller from '../components/VictimScroller';

const main ={
  // backgroundImage: 'url("./poster.jpg")',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  // minHeight: '87vh',
}

const content ={
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -15%)',
  // textAlign: 'center',
  // // color: '#fff',
  // padding: 10,
  // width: '100%',
}

const logo ={
  height:  '70vh',
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
      <main style={main}>
        <div style={content}>
        {/* <img src="./poster.jpg" style={logo}/> */}
          <VictimScroller />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}