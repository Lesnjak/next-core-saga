require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'de', 'fr'],
  },
  env: {
    BACKEND_HTTP_API_ENDPOINT: process.env.BACKEND_HTTP_API_ENDPOINT,
    BACKEND_SOCKET_ENDPOINT: process.env.BACKEND_SOCKET_ENDPOINT,
    USER_IDLE_TIMEOUT_MS: process.env.USER_IDLE_TIMEOUT_MS,
    BACKEND_SOCKET_PATH: process.env.BACKEND_SOCKET_PATH,
  },
};

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [nextTranslate],
    // Your other plugins here
  ],
  nextConfig
);
