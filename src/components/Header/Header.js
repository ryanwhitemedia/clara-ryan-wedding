import { memo } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import Link from 'next/link';
import styles from './Header.module.scss';
import routes from '../../data/routes';

function Header() {
  return (
    <header className={classnames(styles.Header)}>
      <nav>
        <ul>
          {Object.values(routes).map(({ path, title }) => (
            <li key={path}>
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

Header.propTypes = checkProps({});

Header.defaultProps = {};

export default memo(Header);
