import type { Meta, StoryObj } from "@storybook/react";

import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: "텍스트를 입력하세요.",
  },
};
