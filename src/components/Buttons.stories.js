import React from 'react';
import Buttons from './Buttons';

export default {
  component: Buttons,
  title: 'Buttons',
};

const Template = args => <Buttons {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Buttons',
    state: 'Buttons',
  },
};
