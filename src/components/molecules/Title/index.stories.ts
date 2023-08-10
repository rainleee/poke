import type { Meta, StoryObj } from "@storybook/react";

import { Title } from ".";

const meta: Meta<typeof Title> = {
  title: "Molecules/Title",
  component: Title,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    title: "타이틀",
  },
};
