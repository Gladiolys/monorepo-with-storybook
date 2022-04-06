import { Story, Meta } from '@storybook/react';
import { OtherComponent, OtherComponentProps } from './other-component';

export default {
  component: OtherComponent,
  title: 'OtherComponent',
} as Meta;

const Template: Story<OtherComponentProps> = (args) => (
  <OtherComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
