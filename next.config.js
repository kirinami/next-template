const { i18n } = require('./next-i18next.config');

/**
 *  @type {import('next').NextConfig}
 */
module.exports = {
  i18n: {
    ...i18n,
    locales: ['default', ...i18n.locales],
    defaultLocale: 'default',
  },
  reactStrictMode: true,
};
