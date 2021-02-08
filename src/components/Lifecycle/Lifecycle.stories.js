import React from 'react';

import Lifecycle from './Lifecycle';

const Stories = {
  title: 'Task2/Lifecycle',
  component: Lifecycle,
};
export default Stories;

const Template = args => <Lifecycle {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
