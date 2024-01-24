"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import { ConfigProvider, Layout } from "antd";
// import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderContent from "@components/HeaderContent/HeaderContent";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { usePathname } from "next/navigation";

// const inter = Inter({ subsets: ['latin'] })
const monts = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={monts.className}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: monts.style.fontFamily,
            },
          }}
        >
          <Layout style={{ minHeight: "100vh" }}>
            {pathname.split("/")[1] !== "studio" && (
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
            )}
            <Content>
              <Provider store={store}>{children}</Provider>
            </Content>
            {pathname.split("/")[1] !== "studio" && <Footer>Footer</Footer>}
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
