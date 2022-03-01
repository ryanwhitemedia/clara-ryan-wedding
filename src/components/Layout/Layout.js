import classnames from 'classnames';

import { GtmScript } from '@/utils/analytics';
import useCookieBanner from '@/utils/hooks/use-cookie-banner';

import CookieBanner from '@/components/CookieBanner/CookieBanner';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import styles from './Layout.module.scss';

function Layout({ children }) {
  const { validCookie, cookieConsent, updateCookies, acceptAllCookies, rejectAllCookies } = useCookieBanner();

  return (
    <>
      <GtmScript consent={cookieConsent?.statistics} />

      <Header />
      <div className={classnames(styles.Layout)}>{children}</div>
      <Footer />

      {!validCookie && (
        <CookieBanner
          cookieConsent={cookieConsent}
          onAccept={acceptAllCookies}
          onUpdate={updateCookies}
          onReject={rejectAllCookies}
        />
      )}
    </>
  );
}

Layout.defaultProps = {};

export default Layout;
