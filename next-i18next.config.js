const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: true,
  },
  defaultNS: 'common',
  fallbackLng: {
    'en-US': ['en'],
    'fr-FR': ['fr'],
    // default: [process.env.NODE_ENV !== 'production' ? 'en' : 'en'],
  },
  localePath: path.resolve('./public/locales'),
};
