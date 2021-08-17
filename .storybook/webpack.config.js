module.exports = async ({ config }) => {
  config.resolve.alias = {
    'react-native$': 'react-native-web',
    'react-native-svg': 'svgs'
  };

  return config;
};