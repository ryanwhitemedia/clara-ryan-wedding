import { memo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

function Faq() {
  return (
    <main className={classnames(styles.Faq)}>
      <Head title="FAQ" />
      <h3>Q: Can I bring a date?</h3>
      <p>Your formal invitation will include plus one details.</p>
      <h3>Q: Where can i stay</h3>
      <p>We will provide accomidation information closer to the date.</p>
      <h3>Q: Are kids welcome?</h3>
      <p>
        Our wedding is going to be an adults-only event so that everyone can relax and enjoy the evening. We appreciate
        you making arrangements ahead of time and leaving the kids at home so you can celebrate with us.
      </p>

      <p className={classnames(styles.note)}>
        Have more questions? Contact us at <a href="mailto:info@clararyanwedding.com">info@clararyanwedding.com</a>.
      </p>
    </main>
  );
}

export default memo(Faq);
