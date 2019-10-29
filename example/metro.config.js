/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path')
const blacklist = require('metro-config/src/defaults/blacklist')

const libraryTemplateRoot = path.resolve(__dirname, '..')

module.exports = {
  watchFolders: [libraryTemplateRoot],
  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    },
    blacklistRE: blacklist([
      new RegExp(`${libraryTemplateRoot}/node_modules/react/.*`),
      new RegExp(`${libraryTemplateRoot}/node_modules/react-native/.*`),
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
}