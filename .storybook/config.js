import { configure, addDecorator } from '@storybook/vue';

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
// import PageTitle from '../components/PageTitle.vue';

// Install Vue plugins.
// Vue.use(Vuex);

const req = require.context('../components/', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
