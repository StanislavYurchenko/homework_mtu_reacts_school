import React from 'react';

import Output from './Output';

const Stories = {
  title: 'Task1/Output',
  component: Output,
  decorators: [],
};
export default Stories;

const Template = args => <Output {...args} />;

export const VeryLong = Template.bind({});
VeryLong.args = {
  stringMain: '12345678901234567890',
  stringPrev: '12345678901234567890',
};

export const Long = Template.bind({});
Long.args = {
  stringMain: '1234567890',
  stringPrev: '1234567890',
};

export const Short = Template.bind({});
Short.args = {
  stringMain: '12345',
  stringPrev: '12345',
};

export const Empty = Template.bind({});
Empty.args = {
  stringMain: '',
  stringPrev: '',
};

export const Plus = Template.bind({});
Plus.args = {
  stringMain: '123456789.123456789 + 987654321.123456789',
  stringPrev: '1234567890.123456789',
};
