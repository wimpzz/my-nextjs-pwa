// next.config.js
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public', // Directory where the service worker and cache will be placed
    register: true, // Register the service worker automatically
    skipWaiting: true, // Activate the service worker immediately
  },
  reactStrictMode: true, // Enables strict mode for React
});
