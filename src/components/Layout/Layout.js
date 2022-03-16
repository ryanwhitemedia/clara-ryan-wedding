import classnames from 'classnames';

import styles from './Layout.module.scss';

// import CookieBanner from '@/components/CookieBanner/CookieBanner';
// import Header from '@/components/Header/Header';
// import { GtmScript } from '@/utils/analytics';
// import useCookieBanner from '@/utils/hooks/use-cookie-banner';

function Layout({ children }) {
  // const { validCookie, cookieConsent, updateCookies, acceptAllCookies, rejectAllCookies } = useCookieBanner();

  return (
    <>
      {/* <GtmScript consent={cookieConsent?.statistics} /> */}

      <div className={classnames(styles.Layout)}>{children}</div>

      {/* {!validCookie && (
        <CookieBanner
          cookieConsent={cookieConsent}
          onAccept={acceptAllCookies}
          onUpdate={updateCookies}
          onReject={rejectAllCookies}
        />
      )} */}
    </>
  );
}

Layout.defaultProps = {};

export default Layout;
