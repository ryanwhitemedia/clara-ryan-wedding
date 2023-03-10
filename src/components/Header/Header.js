import { memo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import styles from './Header.module.scss';

import Logo from '@/assets/svgs/logo.svg';

function Header() {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  return (
    <header className={classnames(styles.Header, { [styles.navOpen]: showNav })}>
      <Link href="/" passHref>
        <a className={classnames(styles.logoWrapper)}>
          <Logo className={classnames(styles.logo)} />
        </a>
      </Link>

      <nav className={classnames(styles.nav)}>
        <ul className={classnames(styles.menu)}>
          <li className={classnames(styles.menuItem, styles.homeMenuItem)}>
            <Link href="/">
              {/* eslint-disable-next-line  */}
              <a
                onClick={() => setShowNav(false)}
                className={classnames(styles.menuItemText, { [styles.active]: router.pathname === '/' })}
              >
                Home
              </a>
            </Link>
          </li>
          <li className={classnames(styles.menuItem)}>
            <Link href="/accomodations">
              {/*  eslint-disable-next-line  */}
              <a
                onClick={() => setShowNav(false)}
                className={classnames(styles.menuItemText, { [styles.active]: router.pathname === '/accomodations' })}
              >
                Accomodations
              </a>
            </Link>
          </li>
          <li className={classnames(styles.menuItem)}>
            <Link href="/location">
              {/*  eslint-disable-next-line  */}
              <a
                onClick={() => setShowNav(false)}
                className={classnames(styles.menuItemText, { [styles.active]: router.pathname === '/location' })}
              >
                Location Details
              </a>
            </Link>
          </li>
          <li className={classnames(styles.menuItem)}>
            <a
              target="_blank"
              onClick={() => setShowNav(false)}
              href="https://withjoy.com/clararyan/registry"
              className={classnames(styles.menuItemText)}
              rel="noreferrer"
            >
              Registry
            </a>
          </li>
          <li className={classnames(styles.menuItem)}>
            <Link href="/faq">
              {/*  eslint-disable-next-line  */}
              <a
                onClick={() => setShowNav(false)}
                className={classnames(styles.menuItemText, { [styles.active]: router.pathname === '/faq' })}
              >
                FAQ&apos;S
              </a>
            </Link>
          </li>
          <li className={classnames(styles.menuItem)}>
            <Link href="/contact">
              {/*  eslint-disable-next-line  */}
              <a
                onClick={() => setShowNav(false)}
                className={classnames(styles.menuItemText, { [styles.active]: router.pathname === '/contact' })}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <button className={classnames(styles.hamburgerButton)} onClick={() => setShowNav(!showNav)}>
        <span className={classnames(styles.bar, styles.one)} />
        <span className={classnames(styles.bar, styles.two)} />
        <span className={classnames(styles.bar, styles.three)} />
        <span className={classnames(styles.bar, styles.four)} />
      </button>
    </header>
  );
}

Header.defaultProps = {};

export default memo(Header);
