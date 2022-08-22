import { memo } from 'react';
import Image from 'next/image';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

import eloraMap from '@/assets/images/elora-map.png';

function location() {
  return (
    <main className={classnames(styles.Location)}>
      <Head title="Location" />

      <div className={classnames(styles.imageContainer)}>
        <Image src={eloraMap} width="878" height="702" alt="Elora Mill Map" />
      </div>

      <ul className={classnames(styles.list)}>
        <li className={classnames(styles.listItem)}>
          <h3>Elora Mill</h3>
          <p>77 Mill St W, Elora, ON N0B 1S0</p>
        </li>
        <li className={classnames(styles.listItem)}>
          <h3>
            <span>6 - </span> Ceremony
          </h3>
          <p>22 Ross st, elora, on N0B 1s0</p>
        </li>
        <li className={classnames(styles.listItem)}>
          <h3>
            <span>5 - </span> Reception
          </h3>
          <p>51 Mill St W, Elora, ON N0B 1S0</p>
        </li>
        <li className={classnames(styles.listItem)}>
          <h3>
            <span>10 - </span> Parking
          </h3>
          <p>22 Ross st, elora, on N0B 1s0</p>
        </li>
      </ul>
    </main>
  );
}

export default memo(location);
