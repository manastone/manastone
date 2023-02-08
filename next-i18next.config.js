const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: true,
  },
  //defaultNS: 'common',
  fallbackLng: {
    'en-US': ['en'],
    'fr-FR': ['fr'],
    // default: [process.env.NODE_ENV !== 'production' ? 'en' : 'en'],
  },
  pages: {
    '*': ['common'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
  },
  localePath: path.resolve('./public/locales'),
};
