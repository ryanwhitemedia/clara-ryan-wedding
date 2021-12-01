import { memo } from 'react';

import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

export const BUTTON_THEMES = {
  DEFAULT: 'default',
  DEFAULT_BORDER: 'default-border',
  ORANGE: 'orange',
  RED: 'red',
  FADED_BLUE: 'faded-blue',
  DARK_BLUE: 'dark-blue',
  LIGHT_BLUE: 'light-blue',
  PURPLE: 'purple',
  LINK: 'link',
  LIGHT_GREY: 'light-grey',
  GREEN: 'green',
  GREEN_BORDER: 'green-border',
  WHITE: 'white',
  YELLOW: 'yellow',
  NONE: 'none'
};

function Button({ className, name, children, href, onClick, openNewTab, theme, role, tabIndex, disabled }) {
  if (href !== undefined) {
    return (
      <Link role={role} tabIndex={tabIndex} href={href}>
        <a
          href={href}
          aria-label={name}
          target={openNewTab && '_blank'}
          rel={openNewTab && 'noopener noreferrer'}
          className={classnames(styles.Button, className, styles[theme])}
        >
          {children}
        </a>
      </Link>
    );
  }
  return (
    <button
      role={role}
      tabIndex={tabIndex}
      className={classnames(styles.Button, className, styles[theme])}
      onClick={onClick}
      disabled={disabled}
      aria-label={name}
    >
      {children}
    </button>
  );
}

Button.propTypes = checkProps({
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  openNewTab: PropTypes.bool,
  href: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(BUTTON_THEMES)),
  role: PropTypes.string,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  name: PropTypes.string
});

Button.defaultProps = {
  theme: BUTTON_THEMES.DEFAULT
};

export default memo(Button);
