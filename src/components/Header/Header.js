import { memo, useContext } from 'react';
import classnames from 'classnames';

import styles from './Header.module.scss';

import Star from '@/assets/svgs/star.svg';
import TonicIcon from '@/assets/svgs/tonic.svg';

import { AppContext } from '@/contexts/app-context';

function Header() {
  const { homeState, setHomeState } = useContext(AppContext);

  return (
    <header className={classnames(styles.Header, styles[homeState])}>
      <nav className={classnames(styles.nav)}>
        <ul className={classnames(styles.menu)}>
          <li className={classnames(styles.menuItem)}>
            <button className={classnames(styles.link, styles.contactLink)} onClick={() => setHomeState('contact')}>
              Contact
              <Star className={classnames(styles.icon, { [styles.active]: homeState === 'contact' })} />
            </button>
          </li>
          <li>
            <button className={classnames(styles.link, styles.aboutLink)} onClick={() => setHomeState('about')}>
              <Star className={classnames(styles.icon, { [styles.active]: homeState === 'about' })} />
              About
            </button>
          </li>
          <li>
            <a
              tabIndex={homeState === 'contact' ? 0 : -1}
              href="mailto:accounts@toniccreative.com"
              className={classnames(styles.link, styles.emailText)}
            >
              Accounts@
            </a>
          </li>
          <li>
            <button
              disabled={homeState === 'home'}
              className={classnames(styles.link, styles.logoContainer)}
              onClick={() => setHomeState('home')}
            >
              <TonicIcon className={classnames(styles.logo)} />
            </button>
          </li>
          <li>
            <p className={classnames(styles.link, styles.creativeLink)}>Creative</p>
            <p className={classnames(styles.link, styles.comLink)}>.com</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.defaultProps = {};

export default memo(Header);
