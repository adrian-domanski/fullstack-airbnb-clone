const withTwin = require('./withTwin.js')
/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
  },
})
