import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Link from '../components/NavLink';
import Footer from '../components/Footer';
import VictimScroller from '../components/VictimScroller';

const eie ={
  width: '100%',
  height: '70vh',
  background: 'var(--base2)',
  color: 'var(--white)',
}

const poster ={
  height: '70vh',
  float: 'left',
  verticalAlign: 'middle',
}

const mission ={
  display: 'inline',
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Enough Is Enough</title>
      </Head>
      <Header />
      <div style={eie}>
        <img src="./poster.jpg" style={poster}/>
        <h2>ENOUGH IS ENOUGH</h2>
        <span style={mission}>Our mission is to create a space for those affected by these crimes against humanity. During times like this it can feel as if there is merely nothing we can do to express our anger, outrage, and emotions for the unjust treatment of Black bodies in America. Police enforcement, government officials, and leaders of this country constantly misuse their power and there doesn’t seem to be an end in sight. When will our voices be heard. When will change occur? HOW MANY MORE PEOPLE HAVE TO DIE for law and order to actually exist, not only for white people. Our goal is to come together and use our action plan while practicing social distancing due to COVID-19, to ensure black bodies are united and supported by the city of Bloomington as well as The Bloomington Police Force.</span>
        <br />
        <button>Agenda</button>
        <button>Donate</button>
        <button>Contact</button>

      </div>

      <VictimScroller />

      <footer>
        <Footer />
      </footer>
    </div>
  )
}