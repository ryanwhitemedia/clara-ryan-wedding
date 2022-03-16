import { memo, useState } from 'react';

import { AppContext } from '../contexts/app-context';

function AppContextProvider({ children }) {
  const [homeState, setHomeState] = useState('home');

  return (
    <AppContext.Provider
      value={{
        homeState,
        setHomeState
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default memo(AppContextProvider);
