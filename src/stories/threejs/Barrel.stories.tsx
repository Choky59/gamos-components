import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Barrel from '../../components/threejs/barrel/Barrel';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'threejs/Barrel',
  component: Barrel,
} as ComponentMeta<typeof Barrel>;

const Template: ComponentStory<typeof Barrel> = (args) => <Barrel />;

export const Primary = Template.bind({});
Primary.args = {};