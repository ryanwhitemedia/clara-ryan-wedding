import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';

import styles from './Icon.module.scss';

import { Account } from '../../assets/svgs/account.svg';
import { ArrowRight } from '../../assets/svgs/arrow-right.svg';
import { BarGraphUp } from '../../assets/svgs/bar-graph-up.svg';
import { CadFlag } from '../../assets/svgs/ca-flag.svg';
import { Calendar } from '../../assets/svgs/calendar.svg';
import { Castle } from '../../assets/svgs/castle.svg';
import { DollarShield } from '../../assets/svgs/dollar-shield.svg';
import { Trophy } from '../../assets/svgs/trophy.svg';
import { Star } from '../../assets/svgs/star-silhouette.svg';
import { Person } from '../../assets/svgs/person.svg';

const icons = {
  account: Account,
  arrowRight: ArrowRight,
  barGraphUp: BarGraphUp,
  cadFlag: CadFlag,
  calendar: Calendar,
  castle: Castle,
  dollarShield: DollarShield,
  person: Person,
  star: Star,
  trophy: Trophy
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
  name: 'calendar'
};

export default memo(Icon);
