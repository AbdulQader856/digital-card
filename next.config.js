/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "placehold.co",
        "i.ytimg.com",
        "pagedone.io",
      ],
    },
    experimental: {
      serverActions: {
        allowedOrigins: [
          "*.msmestory.com",
          "script.google.com",
        ],
      },
    },
    
  };
  
  module.exports = nextConfig;
  