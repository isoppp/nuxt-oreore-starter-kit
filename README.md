# nuxt-oreore-starter-kit

[![Greenkeeper badge](https://badges.greenkeeper.io/isoppp/nuxt-oreore-starter-kit.svg)](https://greenkeeper.io/)

Nuxt.js starter kit

## Environment

- __If you don't think need something, probably it deleting is good choice__

### Include @nuxtjs modules

- google-tag-manager
  - Please setup `module` property in `nuxt.config.js`.
- pwa
  - Please setup `manifest` property in `nuxt.config.js`.
- sitemap
  - Please setup `sitemap` property in `nuxt.config.js`.

### Sass(.scss) file type support

- atomic design folder tree
  - But I don't think it's best. But prepared only folders.
- Eric Meyer’s CSS Reset
  - I like.
- prepared emmet like helpers
  - I created this. And, it's my first attempt.
- using gridlex grid system
  - I like. (But use first time)
- color design inspired bootstrap/bulma
  - Good
- Include some utility classes and mixins
  - But I think probably current utilities is not enough
  
### ESLint support

- Include eslint/standard
- Include airbnb-base
- Include plugin:vue/recommended
- And custom

### stylelint support

- Include stylelint-order
- And custom

### pre-commit and lint-staged supported

- It forces the lint before committing

### storybook support

## Commands

- Install dependencies
  - `yarn`

- Serve with hot reload at localhost:3000 and run storybook localhost:9001
  - `npm run dev`

- Build for production and launch server
  - `npm run build`
  - `npm start`

- Generate static project
  - `npm run generate`

