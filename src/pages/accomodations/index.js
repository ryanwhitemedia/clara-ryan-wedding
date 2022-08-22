import { memo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

function accomodations() {
  return (
    <main className={classnames(styles.Accomodations)}>
      <Head title="accomodations" />
      <h1>Accomodations</h1>
      <ul className={classnames(styles.list)}>
        <li>
          <a href="https://eloramill.ca/" target="_blank" rel="noreferrer">
            Elora Mill (Block Code: 092RWCM)
          </a>
        </li>
        <li>
          <a
            href="https://www.airbnb.ca/rooms/51613288?adults=1&check_in=2023-08-11&federated_search_id=6d7bcf80-ab5b-4d94-b280-9c4c129a8dff&source_impression_id=p3_1646950442_3S5LiRbzX7xINNva&guests=1&check_out=2023-08-13"
            target="_blank"
            rel="noreferrer"
          >
            Riverside Century Home
          </a>
        </li>
        <li>
          <a href="https://www.airbnb.ca/rooms/44164139?adults=1&children=0&infants=0&check_in=2022-10-07&check_out=2022-10-09&federated_search_id=6d7bcf80-ab5b-4d94-b280-9c4c129a8dff&source_impression_id=p3_1646950301_1oPRJ2%2BSvkxumCHc">
            Heritage House
          </a>
        </li>
        <li>
          <a
            href="https://www.airbnb.ca/rooms/38459012?guests=1&adults=1&s=67&unique_share_id=ecbf480a-b231-4cc5-8884-84b6513dfb63&source_impression_id=p3_1646950971_5qYmJL0TzyD4Kabd"
            target="_blank"
            rel="noreferrer"
          >
            Karger Gallery Suite
          </a>
        </li>
        <li>
          <a href="https://www.thebadley.ca/the-rooms" target="_blank" rel="noreferrer">
            The Badley
          </a>
        </li>
        <li>
          <a
            href="https://www.airbnb.ca/rooms/34193435?adults=1&check_in=2023-09-29&federated_search_id=3cbb1b64-a3cc-47f1-ab16-db8d63be2ced&source_impression_id=p3_1660936524_36VGxatdacx3Lv1m&guests=1&check_out=2023-09-30"
            target="_blank"
            rel="noreferrer"
          >
            Gingerbread House
          </a>
        </li>
        <li>
          <a
            href="https://www.airbnb.ca/rooms/48350951?federated_search_id=6246c482-61fe-419a-aa3d-86d16d7c1185&source_impression_id=p3_1619472895_zqidQ0dSdOlR7H1Y"
            target="_blank"
            rel="noreferrer"
          >
            Etherington Loft
          </a>
        </li>
        <li>
          <a
            href="https://www.airbnb.ca/rooms/49277619?adults=1&s=42&unique_share_id=17471201-1F9D-4D6B-824B-97F0B59FA97D&_branch_match_id=1083786686505197199&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdX3T%2FR1zIgsCcjITAIANwHIOBsAAAA%3D&locale=en&_set_bev_on_new_domain=1659633108_ODk4N2E5MDY4MGI5&source_impression_id=p3_1660933448_jpvu4z7dDorC9GeH&check_in=2023-04-21&guests=1&check_out=2023-04-23"
            target="_blank"
            rel="noreferrer"
          >
            Colborne Cottage
          </a>
        </li>
        <li>
          <a href="http://drewhouse.com/accommodations.html" target="_blank" rel="noreferrer">
            Drew House
          </a>
        </li>
        <li>
          <a href="https://www.ayrshirehouse.com/" target="_blank" rel="noreferrer">
            Ayrshire House
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/travel/hotels/Elora%2C%20ON/entity/CgkIksGd79vS1W4QAQ?q=Veranda%20House%20elora&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4518327%2C4570332%2C4597339%2C4703207%2C4718358%2C4723331%2C4757164%2C4786958%2C4790928%2C4794648%2C4814050%2C4816977%2C4828448%2C4829505%2C4834108%2C4836725&hl=en-CA&gl=ca&ssta=1&ts=CAESABogCgIaABIaEhQKBwjmDxAJGAUSBwjmDxAJGAYYATICEAAqCQoFOgNDQUQaAA&rp=ELuO2PDx4_zW3wEQkMXqnvG1vqS2ARCSwZ3v29LVbhDGy5GMrrDin9cBOAJAAEgCogEJRWxvcmEsIE9OwAED&ap=aAE&ictx=1&ved=0CAAQ5JsGahcKEwjYlYPXwtP5AhUAAAAAHQAAAAAQBA&utm_campaign=sharing&utm_medium=link&utm_source=htls"
            target="_blank"
            rel="noreferrer"
          >
            Village Inn
          </a>
        </li>
        <li>
          <a href="https://cedarestates.ca/cedarcliff-home" target="_blank" rel="noreferrer">
            Cedar Cliff
          </a>
        </li>
        <li>
          <a
            href="https://www.airbnb.ca/rooms/plus/23881301?s=51&source_impression_id=p3_1646950635_%2FBuXmtZo947qEE1p&check_in=2023-08-11&guests=1&adults=1&check_out=2023-08-13"
            target="_blank"
            rel="noreferrer"
          >
            Mercantile Manor
          </a>
        </li>
        <li>
          <a href="https://www.innerjoygetaways.com/" target="_blank" rel="noreferrer">
            Inner Joy Getaways
          </a>
        </li>
        <li>
          <a href="https://www.breadalbaneinn.com/inn/" target="_blank" rel="noreferrer">
            Breadalbaane Inn
          </a>
        </li>
        <li>
          <a
            href="https://www.bestwestern.com/en_US/book/hotels-in-fergus/best-western-plus-fergus-hotel/propertyCode.66110.html"
            target="_blank"
            rel="noreferrer"
          >
            Best Western (Block Code: TBD)
          </a>
        </li>
      </ul>
      <p>
        For more details{' '}
        <a
          href="https://docs.google.com/spreadsheets/d/1I_0mn_jigLTb62gH6Yg5EAw0PoCXVlxQ1KJC_5-q0gI/edit#gid=0"
          target="_blank"
          rel="noreferrer"
        >
          click here.
        </a>
      </p>
    </main>
  );
}

export default memo(accomodations);
