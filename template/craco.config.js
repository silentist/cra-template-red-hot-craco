const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');

module.exports = {
  babel: {
    plugin: ['react-hot-loader/babel'],
  },
  webpack: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
    configure: (c) => {
      /* eslint-disable no-param-reassign */
      if (c.mode === 'development') {
        c.entry = ['react-hot-loader/patch', ...c.entry];
        c.resolve = {
          ...c.resolve,
          alias: {
            ...c.resolve.alias,
            'react-dom': '@hot-loader/react-dom',
          },
        };
      }
      return c;
    },
  },
  plugins: [
    {
      plugin: reactHotReloadPlugin,
    },
  ],
};
