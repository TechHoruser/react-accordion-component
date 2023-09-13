import { Accordion } from './Accordion';

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    header: { control: 'text' },
    content: { control: 'text' },
    collapsed: { control: 'boolean' },
  },
} as Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: <h1>Accordion</h1>,
    content: <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum placeat facere incidunt tenetur commodi aperiam reiciendis ratione officiis, nobis officia obcaecati deserunt dolore, voluptatem dicta iste necessitatibus debitis nam? Reiciendis.</p>,
    collapsed: true,
  },
};
