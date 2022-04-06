const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        'component-example': {
          title: 'Component Example',
          url: 'http://localhost:4401',
        },
        'other-component': {
          title: 'Other Component',
          url: 'http://localhost:4402',
        },
      };
    }
    return {
      'component-example': {
        title: 'Component Example',
        url: '/component-example',
      },
      'other-component': {
        title: 'Other Component',
        url: '/other-component',
      },
    };
  },
};
