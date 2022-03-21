import { memo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

import Email from '@/assets/svgs/email.svg';

function Contact() {
  return (
    <main className={classnames(styles.Contact)}>
      <Head title="Contact" />
      <a className={classnames(styles.svg)} href="mailto:info@clararyanwedding.com">
        <Email />
      </a>
    </main>
  );
}

export default memo(Contact);
