import { createContext } from 'react';

export const AppContext = createContext({
  homeState: '',
  setHomeState: () => {}
});
