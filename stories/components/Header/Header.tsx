import React, { ReactNode } from "react";

// import { Button } from './Button';
import "./header.css";
import { Layout } from "antd";

type User = {
  name: string;
};

interface HeaderProps {
  style: React.CSSProperties
  children: ReactNode
}

export const Header = ({style, children}: HeaderProps) => (
  <Layout.Header style={style}>
    {children}
  </Layout.Header>
);
