import React from 'react';

import LifecycleParent from './LifecycleParent';

const Stories = {
  title: 'Task2/LifecycleParent',
  component: LifecycleParent,
};
export default Stories;

const Template = args => <LifecycleParent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: 'some text',
  greetings: 'Hello from "LifecycleParent"!',
};
