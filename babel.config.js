module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      'inline-dotenv',
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@config': './src/config',
            '@hooks': './src/hooks',
          }
        },
      ],
    ],
  };
};
