import React from 'react';

import ErrorHandler from './ErrorHandler';
import LifecycleParent from '../LifecycleParent/LifecycleParent';

const Stories = {
  title: 'Task2/ErrorHandler',
  component: ErrorHandler,
};
export default Stories;

const Template = args => (
  <ErrorHandler {...args}>
    <LifecycleParent {...args} />
  </ErrorHandler>
);

export const GenerateError = Template.bind({});
GenerateError.args = {
  error: false,
  greetings: 'Hello from "ErrorHandler"!',
};
