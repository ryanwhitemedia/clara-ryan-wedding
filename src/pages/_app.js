import React, { useEffect } from 'react';
import { browser, device } from '@jam3/detect';
import 'normalize.css';
import 'default-passive-events';
import 'focus-visible';

import '../styles/global.scss';
import '../styles/nprogress.scss';

import Layout from '../components/Layout/Layout';

// This default export is required in a new `pages/_app.js` file.
function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NODE_ENV !== 'production' && window.location.href.indexOf('?nostat') === -1) {
        require('@jam3/stats')();
      }

      const classes = [device.mobile ? 'mobile' : '', device.type, browser.name].filter((className) =>
        Boolean(className)
      );
      document.body.className = [...document.body.className.split(' '), ...classes].filter(Boolean).join(' ');
    }
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
