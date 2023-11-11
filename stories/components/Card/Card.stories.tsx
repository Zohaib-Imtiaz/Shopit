import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Image, Tag } from "antd";
import { Carousel } from "@components/Carousel/Carousel";
import * as ProductOverviewStories from "@components/ProductOverview/ProductOverview.stories";
import { ProductOverview } from "@components/ProductOverview/ProductOverview";
import { CarouselDefault } from "@components/Carousel/Carousel.stories";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Component/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Title",
    },
    cover: {
      options: ["none", "image", "carousel"],
      mapping: {
        none: null,
        image: (
          <Image
            src={"/Edifier/R1280T/black s1.png"}
            alt=""
            width={350}
            height={350}
          />
        ),
        carousel: <Carousel {...CarouselDefault.args} />,
      },
    },
    children: {
      options: ["empty", "productOverview"],
      mapping: {
        empty: <></>,
        productOverview: (
          <ProductOverview {...ProductOverviewStories.Default.args} />
        ),
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardTemplate: Story = {
  args: {
    title: "Card Template",
    cover: null,
    children: (
      <>
        <p>Text from Children</p>
      </>
    ),
  },
};

export const CoverImageCard: Story = {
  args: {
    title: "Cover Image",
    cover: (
      <Image
        src={"/Edifier/R1280T/black s1.png"}
        alt=""
        width={350}
        height={350}
      />
    ),
    children: <ProductOverview {...ProductOverviewStories.Default.args} />,
  },
};

export const CoverImageCarouselCard: Story = {
  args: {
    title: "Cover Image Carousel Card",
    cover: <Carousel {...CarouselDefault.args} />,
    children: <ProductOverview {...ProductOverviewStories.Default.args} />,
  },
};

export const ProductCard: Story = {
  args: {
    title: "Cover Image",
    cover: (
      <Image
        src={"/Edifier/R1280T/black s1.png"}
        alt=""
      />
    ),
    style:{
      margin: "6px 8px"
    },
    children: <ProductOverview {...ProductOverviewStories.Default.args} />,
  },
};

export const ListingProductCard: Story = {
  args: {
    title: "Cover Image",
    cover: (
      <Image
        src={"/Edifier/R1280T/black s1.png"}
        alt=""
        preview={false}
      />
    ),
    style:{
      margin: "6px 8px",
    },
    children: <ProductOverview {...ProductOverviewStories.Default.args} />,
  },
};