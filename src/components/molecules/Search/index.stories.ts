import type { Meta, StoryObj } from "@storybook/react";

import { Search } from ".";

const meta: Meta<typeof Search> = {
  title: "Molecules/Search",
  component: Search,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  args: {
    ButtonText: "검색",
    placeholder: "검색어를 입력하세요.",
  },
};
