import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Selecteurs',
          ['Lesson', 'Exercices'],
          'CSS-Casquade',
          ['Lesson', 'Exercices'],
          'Box-Model',
          ['Lesson', 'Exercices'],
          'Unites',
          ['Lesson', 'Exercices'],
          'Display',
          ['Lesson', 'Exercices'],
          'Positionnement',
          ['Lesson', 'Exercices'],
        ],
      },
    },
  },
};

export default preview;
