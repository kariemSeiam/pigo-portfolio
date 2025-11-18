/** @type {import('next').NextConfig} */
const getLocalIPAddress = require('./scripts/get-local-ip');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  onDemandEntries: {
    maxInactiveAge: 15 * 60 * 1000,
    pagesBufferLength: 2,
  },
}

// Display network info on startup
if (process.env.NODE_ENV === 'development') {
  const localIP = getLocalIPAddress();
  const port = process.env.PORT || 3000;
  
  console.log('\n');
  console.log('  ➜  Local:   http://localhost:' + port + '/');
  console.log('  ➜  Network: http://' + localIP + ':' + port + '/');
  console.log('\n');
}

module.exports = nextConfig

