import React from 'react';
import { AppRoot } from '@dynatrace/strato-components';
import '../node_modules/@dynatrace/strato-design-tokens/styles/variables.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo"
    }
  },
  decorators: [
    (Story) => (
      <AppRoot>
        <Story />
      </AppRoot>
    ),
  ],
};

export default preview;