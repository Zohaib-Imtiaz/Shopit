import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import classes from "./header.module.css";
import { Badge, Image } from "antd";
import Search from "antd/es/input/Search";
import { ShoppingOutlined } from "@ant-design/icons";

const meta = {
  title: "Layout/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderExample: Story = {
  args: {
    style: {
      textAlign: "center",
      color: "#fff",
      height: 64,
      paddingInline: 50,
      lineHeight: "64px",
      backgroundColor: "#7dbcea",
    },
    children: <p>Hello</p>,
  },
};

export const ApplicationHeader: Story = {
  args: {
    style: {
      // textAlign: "center",
      color: "#fff",
      height: 64,
      paddingInline: 50,
      lineHeight: "64px",
      backgroundColor: "#7dbcea",
    },
    children: (() => {
      return (
        <div className={classes.header}>
          <Image
            src={"/linkedin-color.svg"}
            alt="LinkedIn"
            width={32}
            height={32}
          />
          <div className={classes.rightSide}>
            <Search className={classes.searchBox} />
            <Badge count={5}>
              <ShoppingOutlined style={{ fontSize: "28px", color: '#ffffff' }} />
            </Badge>
          </div>
        </div>
      );
    })(),
  },
};
