import { memo } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

function Faq() {
  return (
    <main className={classnames(styles.Faq)}>
      <Head title="FAQ" />
      <h3>Q: RSVP deadline</h3>
      <p>
        This will be included in a formal invitation. If you have not already done so, please provide your contact
        details where a formal invitation can be sent{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfjBdXFwviAHZr2mnVNvBk5Xe1mtW7X-PF9Dm0YimUC_9vKFA/viewform"
          target="_blank"
          rel="noreferrer"
        >
          here.
        </a>
      </p>

      <h3>Q: Can I bring a date?</h3>
      <p>Your formal invitation will include plus one details.</p>

      <h3>Q: Where can i stay</h3>
      <p>
        Please visit our <Link href="/accomodations/">Accomodations</Link> page for hotels, airbnbs, and other
        recomendations.
      </p>

      <h3>Q: Are kids welcome?</h3>
      <p>
        Our wedding is going to be an adults-only event so that everyone can relax and enjoy the evening. We appreciate
        you making arrangements ahead of time and leaving the kids at home so you can celebrate with us.
      </p>

      <h3>Q: dress code</h3>
      <p>Formal</p>

      <h3>Q: Weather</h3>
      <p>The wedding will be held indoors.</p>

      <h3>Q: Phone Usage</h3>
      <p>
        We kindly ask that you switch off your cell phone and cameras during the ceremony and reception. We will have
        photographers to capture every moment and will share the photos with everyone after the event.
      </p>

      <h3>Q: wheelchair accessibility</h3>
      <p>Yes, there are ramps and elevators. please reach out to us if you&apos;ll need more assistance.</p>

      <h3>Q: Plus ones</h3>
      <p>Your formal invitation will include plus one details.</p>

      <p className={classnames(styles.note)}>
        Have more questions? Contact us at <a href="mailto:info@clararyanwedding.com">info@clararyanwedding.com</a>.
      </p>
    </main>
  );
}

export default memo(Faq);
