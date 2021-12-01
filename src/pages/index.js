import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Head from '../components/Head/Head';
import styles from './index.module.scss';

export default function Home({ className }) {
  return (
    <main className={classnames(styles.Index, className)}>
      <Head />
      <h1>Home Page</h1>
    </main>
  );
}

Home.propTypes = checkProps({
  className: PropTypes.string
});

Home.defaultProps = {};
