import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "badge",
    color: "blue",
  },
};
