import { useContext, useEffect } from 'react';

import { useUser } from '@auth0/nextjs-auth0';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';

import { AppContext } from '../../contexts/app-context';
import { MEMBERSHIP_LEVELS, MEMBERSHIP_ONLY_ROUTES } from '../../data/membershipLevels';
import { useIsActiveUser } from '../../utils/hooks/use-is-active-user';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AlertBanner from '../AlertBanner/AlertBanner';
import Modal from '../Modal/Modal';
import NewsletterForm from '../NewsletterForm/NewsletterForm';

import styles from './Layout.module.scss';

import fetchJson from '../../lib/fetchJson';
import { isDateInPast } from '../../lib/dateHelpers';
import { CONVERTKIT_TAG_IDS } from '../../data/convertkitTagIDs';

const getTransitionStyles = {
  entering: styles.entering,
  entered: styles.entered,
  exiting: styles.exiting
};

function Layout({ children }) {
  const { user } = useUser();
  const router = useRouter();
  const {
    userMetadata,
    userFullProfile,
    showNewsletterModal,
    setShowNewsletterModal,
    userIsTrial,
    setUserIsTrial,
    hidePromoBanner,
    hideTrialBanner,
    hideUpgradePageBanner
  } = useContext(AppContext);
  const { isSubscribed } = useIsActiveUser();

  // Tag users on their first login to Free Convertkit Plan
  useEffect(() => {
    if (userFullProfile?.logins_count <= 1 && userMetadata?.sub_level === MEMBERSHIP_LEVELS.FREE) {
      const subscribe_tag = CONVERTKIT_TAG_IDS.free;
      const unsubscribe_tag = CONVERTKIT_TAG_IDS.membership;
      fetchJson('/api/convertkit/tag-subscriber', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subscribe_tag,
          unsubscribe_tag
        })
      }).then((res) => {
        console.error(res);
      });
    }
  });

  // Set User Trial Info in Context
  useEffect(() => {
    if (userMetadata) {
      if (
        userMetadata?.trial_end_date !== undefined &&
        !isDateInPast(userMetadata.trial_end_date) &&
        (userMetadata?.sub_level === MEMBERSHIP_LEVELS.FREE || userMetadata?.sub_level === 'trial')
      ) {
        setUserIsTrial(true);
      } else {
        setUserIsTrial(false);
      }
    }
  }, [setUserIsTrial, userMetadata]);

  // Control redirections for users based on memberships/routes
  useEffect(() => {
    if (userIsTrial) {
      return;
    }

    /*
      @ryanwhitemedia, Ryan White, 10/14/2021
      Description: If the user is subscribed but they land on the onboarding page, kick them off that page.
    */
    if (user && isSubscribed === true && router.route === '/onboarding') {
      router.push('/');
    }
  }, [isSubscribed, user, router, userMetadata, userIsTrial]);

  /*
    @ryanwhitemedia, Ryan White, 06/08/2021
    Description: PAYWALL - Check if the user is logged in but does not have access to the premium pages.
  */

  useEffect(() => {
    if (user && isSubscribed && router.route !== '/upgrade-subscription') {
      if (userMetadata?.trial_end_date !== undefined && !isDateInPast(userMetadata.trial_end_date)) {
        return;
      }

      if (
        userMetadata.sub_level !== undefined &&
        userMetadata.sub_level !== MEMBERSHIP_LEVELS.MEMBERSHIP &&
        MEMBERSHIP_ONLY_ROUTES.includes(router.route)
      ) {
        router.push('/upgrade-subscription/');
      }
    }
  }, [isSubscribed, user, router, userMetadata]);

  return (
    <>
      <Header />
      <span
        className={classnames(
          styles.Layout,
          'layout',
          { [styles.userActive]: user !== undefined },
          {
            [styles.offsetTop]:
              hidePromoBanner === false ||
              (hideTrialBanner === false && MEMBERSHIP_ONLY_ROUTES.includes(router.route)) ||
              (hideUpgradePageBanner === false && router.route === '/upgrade-subscription')
          }
        )}
      >
        <TransitionGroup style={{ position: 'relative' }}>
          <ReactTransition key={router.pathname} timeout={{ enter: 333, exit: 0 }}>
            {(status) => <div className={classnames(getTransitionStyles[status])}>{children}</div>}
          </ReactTransition>
        </TransitionGroup>
      </span>
      <Modal showModal={showNewsletterModal} onCloseClick={() => setShowNewsletterModal(false)}>
        <NewsletterForm />
      </Modal>

      <AlertBanner />
      {!user && <Footer />}
    </>
  );
}

Layout.propTypes = checkProps({
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
});

Layout.defaultProps = {};

export default Layout;
