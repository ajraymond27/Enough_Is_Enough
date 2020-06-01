import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}



function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

export default MyApp;