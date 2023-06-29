import "./globals.css";
import { Inter } from "next/font/google";
import DefaultLayout from "@/components/layouts/default";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CV Admin CMS",
  description: "",
};

export default async function RootLayout(props: {
  children: ReactNode;
  career: ReactNode;
  note: ReactNode;
  auth: ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className} style={{ padding: "12px" }}>
        <DefaultLayout>{props.children}</DefaultLayout>
        <div>
          <div>{props.career}</div>
          <div>{props.note}</div>
        </div>
        <div className="m-4">#{props.auth}#</div>
      </body>
    </html>
  );
}
