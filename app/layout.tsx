'use client'
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import { ConfigProvider, Layout } from "antd";
// import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderContent from "@components/HeaderContent/HeaderContent";

// const inter = Inter({ subsets: ['latin'] })
const monts = Montserrat({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monts.className}>
        <ConfigProvider theme={{token: {
          fontFamily: monts.style.fontFamily
        }}}>
          {/* <StyledComponentsRegistry> */}
          <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          color: "#fff",
          height: 64,
          paddingInline: 50,
          lineHeight: "64px",
          backgroundColor: "#7dbcea",
        }}
      >
        <HeaderContent />
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>

            {/* {children} */}
            {/* </StyledComponentsRegistry> */}
        </ConfigProvider>
      </body>
    </html>
  );
}