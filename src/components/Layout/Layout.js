import classnames from 'classnames';

import styles from './Layout.module.scss';

import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={classnames(styles.Layout)}>{children}</div>
    </>
  );
}

Layout.defaultProps = {};

export default Layout;
