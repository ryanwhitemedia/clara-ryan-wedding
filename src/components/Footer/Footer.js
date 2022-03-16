import { memo } from 'react';
import classnames from 'classnames';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={classnames(styles.Footer)}>
      <h2>Footer</h2>
    </footer>
  );
}

Footer.defaultProps = {};

export default memo(Footer);
