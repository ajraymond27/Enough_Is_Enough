import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Donate() {
  return (
    <div className="container">
      <Head>
        <title>Donate</title>
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