
import React from 'react';
import '../src/index.css';
import store from '../src/store/store'
import { Provider } from "react-redux";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
};

export default preview;

export const decorators = [
  Story => (
    <Provider store={store}>
      <Story />
    </Provider>
  )
];