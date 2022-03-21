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
      <p>Location: TBA</p>
      <a
        className={classnames(styles.button)}
        href="https://forms.gle/DvtoLvDFqYWBNegh8"
        target="_blank"
        rel="noreferrer"
      >
        Provide Contact Details
      </a>

      <h6 className={classnames(styles.inviteLink)}>Formal invitation to follow</h6>
    </main>
  );
}

Home.defaultProps = {};

export default memo(Home);
