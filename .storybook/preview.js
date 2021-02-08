import { addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import StoryRouter from 'storybook-react-router';
import '@storybook/addon-console';

addDecorator(jsxDecorator);
addDecorator(StoryRouter());

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
