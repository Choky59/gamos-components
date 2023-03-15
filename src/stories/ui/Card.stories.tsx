import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card, CardProps } from '../../components/ui/card/Card';
export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;



const Template: ComponentStory<typeof Card> = (args: CardProps) => <Card {...args} />;

export const normal = Template.bind({});
normal.args = {
};


