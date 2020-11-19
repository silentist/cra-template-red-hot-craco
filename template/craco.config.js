const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
    configure: (c) => {
      /* eslint-disable no-param-reassign */
      if (c.mode === 'development') {
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
  jest: {
    configure: (c) => {
      c.moduleNameMapper = {
        ...c.moduleNameMapper,
        '~/(.*)$': '<rootDir>/src/$1',
      };
      c.moduleFileExtensions = [...c.moduleFileExtensions, 'jsx'];
      return c;
    },
  },
  plugins: [
    {
      plugin: reactHotReloadPlugin,
    },
  ],
};
