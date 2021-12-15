import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';

import styles from './Icon.module.scss';

import Star from '../../assets/svgs/star.svg';

const icons = {
  star: Star
};

function Icon({ className, name }) {
  let Icon = icons[name];
  return <Icon className={classnames(styles.Icon, className)}></Icon>;
}

Icon.propTypes = checkProps({
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons))
});

Icon.defaultProps = {
  name: 'star'
};

export default memo(Icon);
