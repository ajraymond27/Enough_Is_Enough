import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <main >
        Hello Universe
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}