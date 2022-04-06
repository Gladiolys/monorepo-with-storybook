import { Story, Meta } from '@storybook/react';
import { ComponentExample, ComponentExampleProps } from './component-example';

export default {
  component: ComponentExample,
  title: 'ComponentExample',
} as Meta;

const Template: Story<ComponentExampleProps> = (args) => (
  <ComponentExample {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
