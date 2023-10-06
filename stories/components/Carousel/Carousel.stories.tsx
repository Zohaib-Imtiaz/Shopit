import { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import { Image } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import classes from './carousel.module.css'

const meta = {
  title: "Component/Carousel",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarouselDefault: Story = {
  args: {
    // infinite: false,
    slidesToShow: 1,
    style: {
      width: "350px",
    },
    arrows: true,
    nextArrow: <ArrowRightOutlined />,
    prevArrow: <ArrowLeftOutlined />,
    centerMode:true,
    children: [
      <div key={1}>
        <Image
          src={"/Edifier/R1280T/black s1.png"}
          alt=""
          width={350}
          height={350}
        />
      </div>,
      <div key={2}>
        <Image
          src={"/Edifier/R1280T/white s1.png"}
          alt=""
          width={350}
          height={350}
        />
      </div>,
      <div key={3}>
        <Image
          src={"/Edifier/R1280T/brown s1.png"}
          alt=""
          width={350}
          height={350}
        />
      </div>,
    ],
  },
};

export const CarouselCardRow: Story = {
  args: {
    infinite: false,
    slidesToShow: 4,
    style: {
      padding: "0px 16px",
    },
    arrows: true,
    nextArrow: <ArrowRightOutlined />,
    prevArrow: <ArrowLeftOutlined />,
    children: [
      <div key={1}>
        <Image
          src={"/Edifier/R1280T/black s1.png"}
          alt=""
          width={350}
          height={350}
        />
      </div>,
      <div key={2}>
        <Image
          src={"/Edifier/R1280T/white s1.png"}
          alt=""
          width={350}
          height={350}
        />
      </div>,
      <div key={3}>
        <Image
          src={"/Edifier/R1280T/brown s1.png"}
          alt=""
          width={350}
          height={350}
        />
      </div>,
    ],
  },
};

export const CarouselHome: Story = {
  args: {
    slidesToShow: 1,
    style: {
      width: 'vw',
    },
    arrows: true,
    nextArrow: <ArrowRightOutlined />,
    prevArrow: <ArrowLeftOutlined />,
    children: [
      <div key={1} id="IMAGE" className={classes.single_Item_full_width_centered}>
        <img
          src={"/Edifier/R1280T/black s1.png"}
          alt=""
        />
      </div>,
      <div key={2} className={classes.single_Item_full_width_centered}>
        <Image
          src={"/Edifier/R1280T/white s1.png"}
          alt=""
        />
      </div>,
      <div key={3} className={classes.single_Item_full_width_centered}>
        <Image
          src={"/Edifier/R1280T/brown s1.png"}
          alt=""
        />
      </div>,
    ],
  },
};
