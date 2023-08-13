import { Meta, StoryObj } from "@storybook/react";
import { ProductOverview } from "./ProductOverview";

const meta = {
  title: "SubComponent/ProductOverview",
  component: ProductOverview,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      type: "string",
    },
    discount: {
      type: "number",
    },
    price: {
      type: "number",
    },
    discountedPrice: {
      type: "number",
    },
  },
} satisfies Meta<typeof ProductOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Product Name",
    price: 100,
    discountedPrice: 80,
    discount: 20,
  },
};

export const Sample: Story = {
  args: {
    name: "Product Name",
    price: 100,
    discountedPrice: 80,
    discount: 20,
  },
};
