import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label, LabelProps } from '../../components/ui/label/Label';
export default {
  title: 'UI/Label',
  component: Label,
  argTypes: {
    size: {control: "select"},
    backgroundColor: {control: "select"}
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: LabelProps) => <Label {...args} />;

export const normal = Template.bind({});
normal.args = {
  size: 'normal'
};

export const h1 = Template.bind({});
h1.args = {
  size: "h1"
};

export const h2 = Template.bind({});
h2.args = {
  size: "h2"
};
