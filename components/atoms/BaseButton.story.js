// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/vue'
import BaseButton from './BaseButton.vue'

storiesOf('BaseButton', module)
  .add('default', () => ({
    components: { BaseButton },
    template: '<base-button></base-button>',
  }))
  .add('custom text', () => ({
    components: { BaseButton },
    template: '<base-button :text="text"></base-button>',
    data () {
      return {
        text: 'Button text here',
      }
    },
  }))

