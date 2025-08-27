const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public', // Directory where the service worker and cache will be placed
    register: true,  // Register the service worker automatically
    skipWaiting: true, // Activate the service worker immediately
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  },
  reactStrictMode: true,  // Enables React Strict Mode (recommended for development)
  experimental: {
    turbopack: true,
  },
});
