import { memo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

function Engagement() {
  return (
    <main className={classnames(styles.Engagement)}>
      <Head title="Engagement Party" />
      <h1>Engagement Party</h1>

      <div className={classnames(styles.textContainer)}>
        <h3>Date:</h3>
        <p className={classnames(styles.largeDetail)}>Saturday, May 28, 2022</p>
      </div>
      <div className={classnames(styles.textContainer)}>
        <h3>Time:</h3>
        <p className={classnames(styles.largeDetail)}>1:00PM - 4:00PM</p>
      </div>
      <div className={classnames(styles.textContainer)}>
        <h3>Location:</h3>
        <p className={classnames(styles.boldText)}>Terroni, adelaide</p>
        <p>
          (Il Covo Room, upstairs)
          <br />
          57 Adelaide St E, Toronto, ON M5C 1K6
        </p>
      </div>
      <div className={classnames(styles.textContainer)}>
        <h3>Details:</h3>
        <p>
          Drinks will be available for purchase 1-4PM
          <br />
          complimentary appetizers will be served 2-3PM
        </p>
      </div>
      <div className={classnames(styles.textContainer)}>
        <a
          href="https://forms.gle/v5CQGfdSZ3P6LoyBA"
          target="_blank"
          className={classnames(styles.button)}
          rel="noreferrer"
        >
          RSVP
        </a>
      </div>
    </main>
  );
}

export default memo(Engagement);
