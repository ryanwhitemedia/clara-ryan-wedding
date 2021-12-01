import { memo } from 'react';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
import Link from 'next/link';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={classnames(styles.Footer)}>
      <h2>Footer</h2>
      <Link href="/">Home</Link>
    </footer>
  );
}

Footer.propTypes = checkProps({});

Footer.defaultProps = {};

export default memo(Footer);
