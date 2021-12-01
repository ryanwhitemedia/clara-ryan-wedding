import { memo, useContext } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import { useUser } from '@auth0/nextjs-auth0';
import classnames from 'classnames';
import Link from 'next/link';

import LoggedOutNav from '../LoggedOutNav/LoggedOutNav';
import UserSideNav from '../UserSideNav/UserSideNav';

import Logo from '../../assets/svgs/stratosphere-logo-dark.svg';

import styles from './Header.module.scss';
import { AppContext } from '../../contexts/app-context';

function Header() {
  const { showNav, setShowNav } = useContext(AppContext);

  const { user } = useUser();
  return (
    <header className={classnames(styles.Header, { [styles.navOpen]: showNav })}>
      <div className={classnames(styles.topBar)}>
        <Link href="/">
          <span className={classnames(styles.logoWrapper)}>
            <Logo className={classnames(styles.logo)} />
          </span>
        </Link>
      </div>
      <button aria-label="Navbar dropdown" className={styles.hamburgerButton} onClick={() => setShowNav(!showNav)}>
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>
      {user === undefined && <LoggedOutNav />}
      {user !== undefined && <UserSideNav />}
    </header>
  );
}

Header.propTypes = checkProps({});

Header.defaultProps = {};

export default memo(Header);
