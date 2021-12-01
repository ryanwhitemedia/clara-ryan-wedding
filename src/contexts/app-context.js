import { createContext } from 'react';

export const AppContext = createContext({
  activeUserProfile: {},
  sideNavState: '',
  setSideNavState: () => {},
  showNav: false,
  setShowNav: () => {},
  showNewsletterModal: false,
  setShowNewsletterModal: () => {},
  stripePrices: [],
  setStripePrices: () => {},
  activeTab: 'chart',
  setActiveTab: () => {},
  userMetadata: null,
  setUserMetadata: () => {},
  userFullProfile: null,
  setUserFullProfile: () => {},
  userIsTrial: null,
  setUserIsTrial: () => {},
  hideTrialBanner: () => null,
  setHideTrialBanner: () => {},
  hideUpgradePageBanner: () => null,
  setHideUpgradePageBanner: () => {},
  hidePromoBanner: () => null,
  setHidePromoBanner: () => {}
});
