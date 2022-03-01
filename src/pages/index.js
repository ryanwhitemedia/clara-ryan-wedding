import { memo } from 'react';
import classnames from 'classnames';

import Head from '../components/Head/Head';
import styles from './index.module.scss';

function Home({ className }) {
  return (
    <main className={classnames(styles.Home, className)}>
      <Head title="Home" />

      <h1>Home Page</h1>
    </main>
  );
}

Home.defaultProps = {};

export default memo(Home);
