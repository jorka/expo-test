module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            assets: './assets',
            components: './src/components',
            screens: './src/screens',
            hooks: './src/hooks',
            utils: './src/utils',
            types: './src/types',
            gql: './src/gql',
            src: './src'
          }
        }
      ]
    ]
  }
}
