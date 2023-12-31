import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "CV Admin CMS",
  description: "",
};

const RootLayout = (props: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
