import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from ".";

const meta: Meta<typeof TextInput> = {
  title: "Atoms/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    placeholder: "내용을 입력하세요.",
  },
};
