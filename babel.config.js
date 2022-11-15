module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        // this is to ensure importing only used module from react-native-paper
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
