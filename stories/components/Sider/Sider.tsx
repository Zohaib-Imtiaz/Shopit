import { Layout, SiderProps } from "antd";
import { ReactNode } from "react";

export const Sider = ({children, ...siderProps}: SiderProps & { children: ReactNode }) => {
  return <Layout.Sider {...siderProps}>{children}</Layout.Sider>;
};
