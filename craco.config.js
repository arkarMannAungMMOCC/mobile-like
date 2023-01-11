const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@screens": path.resolve(__dirname, 'src/screens/'),
      "@route": path.resolve(__dirname, 'src/route/'),
      "@store": path.resolve(__dirname, 'src/store/'),
      "@layout": path.resolve(__dirname, 'src/layout/'),
      "@assets": path.resolve(__dirname, 'src/assets/'),
      "@const": path.resolve(__dirname, 'src/const/'),
      "@helper": path.resolve(__dirname, 'src/helper/')
    }
  }
};