import type { Meta, StoryObj } from "@storybook/react";
import { FiltersAndSorts } from "./Filters&Sorts";

const meta = {
  title: "Component/Filters and Sorts",
  component: FiltersAndSorts,
  argTypes: {
    returnFilters: {
      action: "clicked",
    },
    returnSortings: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof FiltersAndSorts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLook: Story = {};
