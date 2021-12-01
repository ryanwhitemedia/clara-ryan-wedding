module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_SITE_URL || 'https://www.stratosphereinvesting.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next']
      }
    ]
  },
  exclude: [
    '/dashboard',
    '/onboarding',
    '/signup-success',
    '/upgrade-subscription',
    '/subscription-expired',
    '/account',
    '/internal-portfolio-news'
  ]
  // ...other options
};
