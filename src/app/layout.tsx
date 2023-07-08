import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "CV Admin CMS",
  description: "",
};

export default async function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{props.children}</body>
    </html>
  );
}
