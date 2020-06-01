import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Agenda() {
  return (
    <div className="container">
      <Head>
        <title>Agenda</title>
      </Head>
      <Header />
      <main style={main}>
        Hello Universe
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}