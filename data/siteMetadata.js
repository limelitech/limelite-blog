/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Limelite Innovators Hub',
  author: 'Kevin Kathei Kathei',
  headerTitle: 'Limelite Hub',
  description: 'Insightful articles on web development, software engineering, and tech innovation.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://limeliteinnovatorshub.com',
  siteRepo: 'https://github.com/limelitech/limelite-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/limelite_white_logo.jpg`,
  avatarImage: `${process.env.BASE_PATH || ''}/static/images/avatar.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'kelvinkatheim@gmail.com',
  github: 'https://github.com/limelitech',
  x: 'https://twitter.com/HubLimelite',
  linkedin: 'https://www.linkedin.com/in/kevinkathei/',
  facebook: '',
  youtube: '',
  instagram: '',
  medium: '',
  mastodon: '',
  threads: '',
  bluesky: '',
  locale: 'en-US',
  stickyNav: false,

  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
    // Optional analytics providers:
    // plausibleAnalytics: { plausibleDataDomain: '' },
    // googleAnalytics: { googleAnalyticsId: '' },
  },

  newsletter: {
    provider: 'buttondown', // buttondown, mailchimp, etc.
  },

  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },

  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
    // Or switch to:
    // provider: 'algolia',
    // algoliaConfig: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },
  },
}

module.exports = siteMetadata
