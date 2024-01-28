import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { magenta } from "@ant-design/colors";
import AppLayout from "@/app/dashboard/_components/AppLayout/AppLayout";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "cv-admin-front",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: magenta.primary,
              colorInfo: magenta.primary,
              borderRadius: 8,
            },
            components: {
              Layout: {
                headerColor: "#fff",
                headerBg: magenta[9],
                colorBgBase: "#fff",
              },
            },
          }}
        >
          <AntdRegistry>
            <AppLayout title="CV Admin Front">{children}</AppLayout>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
