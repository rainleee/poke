import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from ".";

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    children: "내용",
  },
};
