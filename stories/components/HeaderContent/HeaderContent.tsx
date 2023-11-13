"use client"
import { ShoppingOutlined } from "@ant-design/icons";
import { Badge, Image } from "antd";
import Search from "antd/es/input/Search";
import classes from "./headerContent.module.css";

const HeaderContent = () => {
  return (
    <div className={classes.header}>
      <Image
        src={"/Logo.svg"}
        alt="LinkedIn"
        width={150}
        height={60}
        preview={false}
      />
      <div className={classes.rightSide}>
        <Search className={classes.searchBox} />
        <Badge count={5}>
          <ShoppingOutlined style={{ fontSize: "28px", color: "#ffffff" }} />
        </Badge>
      </div>
    </div>
  );
};

export default HeaderContent;