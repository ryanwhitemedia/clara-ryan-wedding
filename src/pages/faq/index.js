import { memo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

function Faq() {
  return (
    <main className={classnames(styles.Faq)}>
      <Head title="FAQ" />
      <h3>Q: Will there be a shuttle?</h3>
      <p>
        Yes. A shuttle will be arriving at the Best Western, then St. Andrews Suites, then Breadalbane Inn at 3:45pm.
        <br />
        <br />
        Beginning at 10:30pm a car will be on stand by to bring guests back to their accomodations.
      </p>

      <h3>Q: dress code</h3>
      <p>
        Cocktail: A step above semi-formal, cocktail attire is a balance between elegant, comfortable, fancy and
        pared-back. Women can opt for a floor-length, tea-length, knee-length, or midi look. Men are required to wear a
        suit and tie but not a tuxedo.
      </p>

      <h3>Q: Are kids welcome?</h3>
      <p>
        Our wedding is going to be an adults-only event so that everyone can relax and enjoy the evening. We appreciate
        you making arrangements ahead of time and leaving the kids at home so you can celebrate with us.
      </p>

      <h3>Q: Weather</h3>
      <p>The wedding will be held indoors.</p>

      <h3>Q: Phone Usage</h3>
      <p>
        We kindly ask that you switch off your cell phone and cameras during the ceremony and reception. We will have
        photographers to capture every moment and will share the photos with everyone after the event.
      </p>

      <h3>Q: wheelchair accessibility</h3>
      <p>Yes, there are ramps and elevators. please reach out to us if you&apos;ll need more assistance.</p>

      <p className={classnames(styles.note)}>
        Have more questions? Contact us at <a href="mailto:info@clararyanwedding.com">info@clararyanwedding.com</a>.
      </p>
    </main>
  );
}

export default memo(Faq);
