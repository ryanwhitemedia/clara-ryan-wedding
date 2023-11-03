import { memo, useContext, useEffect } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

// import Header from '@/components/Header/Header';
import { AppContext } from '@/contexts/app-context';

function Test({ className, token }) {
  const { homeState } = useContext(AppContext);

  useEffect(() => {
    function handleIframeReady(event) {
      if (event.data === 'READY') {
        const targetWindow = window.frames['targetFrame'];
        targetWindow.postMessage(
          {
            token:
              'eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJyeWFuLXRlc3QiLCJkYWlseUxpbWl0Ijo1LCJzY3JlZW5lciI6ZmFsc2UsImlhdCI6MTY5OTA0MjI0NX0.P56dhZNg-srtMzXfIlvlRj3V4eNLlis53XyXQjA1C6A'
          },
          '*'
        );
      }
    }

    window.addEventListener('message', handleIframeReady);

    return () => {
      window.removeEventListener('message', handleIframeReady);
    };
  }, [token]);

  return (
    <main className={classnames(styles.Home, className, styles[homeState])}>
      <div style={{ width: '100vw', height: '100vh' }}>
        <iframe
          title="FinChat"
          name="targetFrame"
          src={`https://widget.finchat.io/d33ce9667b684d958a5ea809cfc1a2c5`}
          // src={`http://localhost:4000/d33ce9667b684d958a5ea809cfc1a2c5`}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </main>
  );
}

// export const getStaticProps = async () => {
//   // // const widgetKey = 'd33ce9667b684d958a5ea809cfc1a2c5';
//   // // if (typeof widgetKey !== 'string') return { notFound: true };
//   // // const res = await fetch(`https://api.widget.finchat.io/auth/token`, {
//   // //   method: 'POST',
//   // //   headers: { 'Content-Type': 'application/json' },
//   // //   body: JSON.stringify({ widgetKey, payload: { uid: 'demo-uid', dailyLimit: 5, screener: false } })
//   // // });
//   // // console.log(res);
//   // if (!res.ok) return { notFound: true, revalidate: 5 };
//   // const token = await res.text();
//   // return { props: { token, widgetKey }, revalidate: 5 };
// };

export default memo(Test);
