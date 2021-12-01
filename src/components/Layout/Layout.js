import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Layout.module.scss';
import transitionStyles from '../../styles/transition-styles.scss';

const getTransitionStyles = {
  entering: transitionStyles.entering,
  entered: transitionStyles.entered,
  exiting: transitionStyles.exiting
};

function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Header />
      <span className={classnames(styles.Layout)}>
        <TransitionGroup style={{ position: 'relative' }}>
          <ReactTransition key={router.pathname} timeout={{ enter: 333, exit: 0 }}>
            {(status) => <div className={classnames(getTransitionStyles[status])}>{children}</div>}
          </ReactTransition>
        </TransitionGroup>
      </span>
      <Footer />
    </>
  );
}

Layout.propTypes = checkProps({
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
});

Layout.defaultProps = {};

export default Layout;
