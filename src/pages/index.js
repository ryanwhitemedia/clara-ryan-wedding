import { memo, useContext, useEffect } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Date from '@/assets/svgs/date.svg';

// import Header from '@/components/Header/Header';
import { AppContext } from '@/contexts/app-context';

import Head from '../components/Head/Head';

function Home({ className, token }) {
  const { homeState } = useContext(AppContext);

  useEffect(() => {
    function handleIframeReady(event) {
      if (event.data === 'READY') {
        const targetWindow = window.frames['targetFrame'];
        targetWindow.postMessage({ token }, '*');
      }
    }

    window.addEventListener('message', handleIframeReady);

    return () => {
      window.removeEventListener('message', handleIframeReady);
    };
  }, [token]);

  return (
    <main className={classnames(styles.Home, className, styles[homeState])}>
      <Head />
      <h1 className={classnames(styles.text)}>
        Save the date
        <br />
        for the wedding of Clara + Ryan
      </h1>
      <Date className={classnames(styles.date)} />
      <p>Friday, September 29, 2023</p>
      <p>4:00pm</p>
      <p>
        Hosted @{' '}
        <a href="https://eloramill.ca/" target="_blank" rel="noreferrer">
          Elora Mill
        </a>
      </p>
      <p> 77 Mill St W, Elora, ON N0B 1S0</p>
      <div id="schedule" className={styles.schedule}>
        <h2>Schedule</h2>
        <div>
          <h3>Shuttle Pickup</h3>
          <p>3:45pm</p>
          <p>Best Western, St. Andrews, Breadalbane Inn</p>
        </div>
        <div>
          <h3>Ceremony</h3>
          <p>4:30PM - 5:00pm</p>
          <p>The Foundry Chapel </p>
        </div>
        <div>
          <h3>Cocktails </h3>
          <p>5:00PM - 6:30PM </p>
          <p>Granary - Irvine Room </p>
        </div>
        <div>
          <h3>Dinner reception </h3>
          <p>6:30PM - 10:00PM </p>
          <p>Granary - Grand Room </p>
        </div>
        <div>
          <h3>Dancing </h3>
          <p>10:00Pm - 1:30AM</p>
          <p>Granary - Grand Room</p>
        </div>
        <div>
          <h3>Shuttle Drop-Off</h3>
          <p>10:30Pm - 1:30AM </p>
          <p style={{ maxWidth: '450px' }}>
            A car will be on standby outside of the venue to bring guests back to their hotels.
          </p>
        </div>
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <iframe
          title="FinChat"
          name="targetFrame"
          src={`https://widget.finchat.io/0ef2466ec1864f0b97848d141ccca319`}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const widgetKey = '0ef2466ec1864f0b97848d141ccca319';

  if (typeof widgetKey !== 'string') return { notFound: true };

  const res = await fetch(`https://api.widget.finchat.io/auth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ widgetKey, payload: { uid: 'demo-uid', dailyLimit: 5, screener: false } })
  });

  if (!res.ok) return { notFound: true, revalidate: 5 };

  const token = await res.text();

  return { props: { token, widgetKey }, revalidate: 5 };
};

export default memo(Home);
