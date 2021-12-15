import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'normalize.css';
import 'default-passive-events';
import 'focus-visible';
import { device, browser } from '@jam3/detect';

import '../styles/global.scss';
import '../styles/nprogress.scss';

import Layout from '../components/Layout/Layout';

// This default export is required in a new `pages/_app.js` file.
function App({ Component, pageProps }) {
  const [isSupported, setIsSupported] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const unsupportedUtil = require('../utils/unsupported-utils');
      if (unsupportedUtil.isSupported()) {
        if (process.env.NODE_ENV !== 'production' && window.location.href.indexOf('?nostat') === -1) {
          require('@jam3/stats')();
        }

        const classes = [device.mobile ? 'mobile' : '', device.type, browser.name].filter((className) =>
          Boolean(className)
        );
        document.body.className = [...document.body.className.split(' '), ...classes].filter(Boolean).join(' ');
      } else {
        setIsSupported(false);
      }
    }
  }, []);

  const TopProgressBar = dynamic(
    () => {
      return import('../components/TopProgressBar/TopProgressBar');
    },
    { ssr: false }
  );

  if (!isSupported) {
    const Unsupported = dynamic(() =>
      import(/* webpackChunkName: "Unsupported" */ '../components/Unsupported/Unsupported')
    );

    return <Unsupported />;
  }

  return (
    <>
      <Layout>
        <TopProgressBar />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
