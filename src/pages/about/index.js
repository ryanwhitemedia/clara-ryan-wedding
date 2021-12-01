import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';

import styles from './index.module.scss';

import Head from '../../components/Head/Head';

function About({ className }) {
  return (
    <main className={classnames(styles.About, className)}>
      <Head title="About" />

      <h1>About Page</h1>
    </main>
  );
}

About.propTypes = checkProps({
  className: PropTypes.string
});

About.defaultProps = {};

export default memo(About);
