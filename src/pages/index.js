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
      <p>4:00pm EST</p>
      <p>
        Hosted @{' '}
        <a href="https://eloramill.ca/" target="_blank" rel="noreferrer">
          Elora Mill
        </a>
      </p>
      <p> 77 Mill St W, Elora, ON N0B 1S0</p>
      <a
        className={classnames(styles.button)}
        href="https://www.weddingwire.ca/web/clara-marshall-and-ryan-white"
        target="_blank"
        rel="noreferrer"
      >
        RSVP
      </a>

      <h6 className={classnames(styles.inviteLink)}>Formal invitations are in the mail</h6>
    </main>
  );
}

Home.defaultProps = {};

export default memo(Home);
