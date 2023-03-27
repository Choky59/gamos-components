import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Barrels from '../../components/p5/barrels/Barrels';
export default {
  title: 'p5/Barrels',
  component: Barrels,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Barrels>;

const Template: ComponentStory<typeof Barrels> = (args) => <Barrels />;

export const Primary = Template.bind({});
