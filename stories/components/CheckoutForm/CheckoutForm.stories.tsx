import type { Meta, StoryObj } from "@storybook/react";
import CheckoutForm from "./CheckoutForm";

const meta = {
  title: "Component/CheckoutForm",
  component: CheckoutForm,
  argTypes: {
    returnFilters: {
      action: "clicked",
    },
    returnSortings: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof CheckoutForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLook: Story = {};
