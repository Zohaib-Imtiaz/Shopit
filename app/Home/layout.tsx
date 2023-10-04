"use client";
// import { Header } from "@components/Header/Header";
import HeaderContent from "@components/HeaderContent/HeaderContent";
import { Sider } from "@components/Sider/Sider";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <Layout>
    //   <Sider
    //     collapsible
    //     collapsedWidth={0}
    //     style={{
    //       backgroundColor: "grey",
    //     }}
    //   >
    //     <ol>
    //       <li>Option 1</li>
    //       <li>Option 2</li>
    //     </ol>
    //   </Sider>

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
        <Footer>
          Footer
        </Footer>
      </Layout>
    // </Layout>
  );
}
