module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_SITE_URL || 'https://www.domain_here.com',
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
  exclude: []
  // ...other options
};
