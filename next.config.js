/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'nl-NL'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
})

module.exports = nextConfig
