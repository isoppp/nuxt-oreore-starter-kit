const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = (storybookBaseConfig) => {

  storybookBaseConfig.resolve.alias['@'] = rootPath;
  storybookBaseConfig.resolve.alias['~'] = rootPath;
  const defaultVueSettingIndex = storybookBaseConfig.module.rules.findIndex((elem) => elem.loader === require.resolve('vue-loader'))

  storybookBaseConfig.module.rules[defaultVueSettingIndex] = {
    test: /\.vue$/,
    loader: require.resolve('vue-loader'),
    options: {
      loaders: {
        css: {
          loader: require.resolve('css-loader'),
        },
        scss: [
          {loader: require.resolve('vue-style-loader')},
          {loader: require.resolve('css-loader')},
          { loader: require.resolve('sass-loader'),
            options: {
              includePaths: [rootPath + '/assets/scss/']
            }
          },
          { loader: require.resolve('sass-resources-loader'),
            options: {
              resources: ['../assets/scss/variables/_variables.scss', '../assets/scss/mixins/_mixins.scss'],
            }
          },
        ],
      },
    },
  }

  storybookBaseConfig.module.rules.push({
    test: /\.story\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })

  return storybookBaseConfig;
}
