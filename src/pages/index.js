import { memo, useContext } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Date from '@/assets/svgs/date.svg';

// import Header from '@/components/Header/Header';
import { AppContext } from '@/contexts/app-context';

import Head from '../components/Head/Head';

function Home({ className }) {
  const { homeState } = useContext(AppContext);

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
    </main>
  );
}

export default memo(Home);
