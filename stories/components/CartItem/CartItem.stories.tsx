import type { Meta, StoryObj } from "@storybook/react";
import { CartItem } from "./CartItem";

const meta = {
  title: "Component/Cart Item",
  component: CartItem,
  argTypes: {
    onAdd: {
      action: "clicked",
    },
    onSubtract: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLook: Story = {};
