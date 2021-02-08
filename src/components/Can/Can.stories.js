import React from 'react';

import Can from './Can';
import LifecycleParent from '../LifecycleParent/LifecycleParent';

const Stories = {
  title: 'Task2/Can',
  component: Can,
};
export default Stories;

const permissions = ['Lifecycle', 'LifecycleParent'];

const Template = args => <Can {...args} />;

export const ShowLifecycleParent = Template.bind({});
ShowLifecycleParent.args = {
  permissions: permissions,
  component: LifecycleParent,
  greetings: 'Hello from "Can"!',
};
