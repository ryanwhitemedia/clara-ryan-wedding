import { memo, useContext } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import { AppContext } from '@/contexts/app-context';

import Head from '../components/Head/Head';

function Home({ className }) {
  const { homeState } = useContext(AppContext);

  return (
    <main className={classnames(styles.Home, className, styles[homeState])}>
      <Head title="Home" />
      <h2 className={classnames(styles.intro)}>
        Was founded on the belief that brands can thrive while considering people and the planet. Through design and
        development, we give life to meaningful brands that are sustainable, intentional, and useful.
      </h2>
    </main>
  );
}

Home.defaultProps = {};

export default memo(Home);
