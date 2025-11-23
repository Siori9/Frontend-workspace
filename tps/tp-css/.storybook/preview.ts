import type { Preview } from '@storybook/angular'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      }
    },
    options: {
      storySort: {
        order: ['CSS-Casquade', ['Lesson', 'Exercice 1']],
      },
    },
  },
};

export default preview;