import { memo } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import styles from './Header.module.scss';
import routes from '../../data/routes';

function Header() {
  return (
    <header className={classnames(styles.Header)}>
      <nav className={classnames(styles.nav)}>
        <ul className={classnames(styles.menu)}>
          {Object.values(routes).map(({ path, title }) => (
            <li key={path} className={classnames(styles.menuItem)}>
              <Link href={path}>
                <a aria-label={path} href={path}>
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.defaultProps = {};

export default memo(Header);
