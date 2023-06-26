import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import DefaultLayout from "@/components/layouts/default";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CV Admin CMS",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className} style={{ padding: "12px" }}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
