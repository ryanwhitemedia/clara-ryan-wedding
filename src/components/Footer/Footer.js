import { memo, useContext } from 'react';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';
import Link from 'next/link';
import { AppContext } from '../../contexts/app-context';
import styles from './Footer.module.scss';
import { WordmarkLogo } from '../../assets/svgs/stratosphere-logo-dark.svg';
import Button, { BUTTON_THEMES } from '../Button/Button';
import { productLinks, resourceLinks } from '../../data/footerRoutes';

function Footer() {
  const { setShowNewsletterModal } = useContext(AppContext);

  return (
    <footer className={classnames(styles.Footer)}>
      <div className={classnames(styles.footerContainer)}>
        <nav className={classnames(styles.footerBox)}>
          <Link href="/">
            <a href="/" className={classnames(styles.stratosphereLogoWrapper)}>
              <WordmarkLogo className={classnames(styles.stratosphereLogo)} />
            </a>
          </Link>
          <div className={classnames(styles.footerItemsList)}>
            <p className={classnames(styles.listHeading)}>Product</p>
            <ul>
              {productLinks.map((item) => (
                <li key={item.label}>
                  {item.label === 'Features' ? (
                    <a href={item.path}>{item.label}</a>
                  ) : (
                    <Link href={item.path}>
                      <a href={item.path}>{item.label}</a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className={classnames(styles.footerItemsList)}>
            <p className={classnames(styles.listHeading)}>Resources</p>
            <ul>
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  {item.label !== 'Newsletter' ? (
                    <Link href={item.path}>
                      <a href={item.path}>{item.label}</a>
                    </Link>
                  ) : (
                    <>
                      <Button
                        name="Open form to sign up for newsletter"
                        theme={BUTTON_THEMES.NONE}
                        className={classnames(styles.footerNoThemeButton)}
                        onClick={() => setShowNewsletterModal(true)}
                      >
                        {item.label}
                      </Button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className={classnames(styles.footerItemsList)}>
            <p className={classnames(styles.listHeading)}>Help</p>
            <ul>
              <li>
                <Link href="/contact/">
                  <a href="/contact/">Contact</a>
                </Link>
              </li>
              <li>
                <a href="/pricing#accordion">FAQ's</a>
              </li>
            </ul>
          </div>
          <Button href="/api/signup" theme={BUTTON_THEMES.WHITE} className={classnames(styles.getStartedButton)}>
            Get Started For Free
          </Button>
        </nav>
        <span className={classnames(styles.companyInfoBox)}>
          <p className={classnames(styles.rightsReservedText)}>
            © {new Date().getFullYear()} Stratosphere Technology Inc. All rights reserved.
          </p>
          <div className={classnames(styles.legalTextContainer)}>
            <Link href="/privacy-policy/">
              <a href="/privacy-policy/" className={classnames(styles.legalText)}>
                Privacy Policy
              </a>
            </Link>
            <p className={classnames(styles.verticalLine)}>|</p>
            <Link href="/terms-of-service/">
              <a href="/terms-of-service/" className={classnames(styles.legalText)}>
                Terms of Service
              </a>
            </Link>
          </div>
        </span>
      </div>
    </footer>
  );
}

Footer.propTypes = checkProps({});

Footer.defaultProps = {};

export default memo(Footer);
