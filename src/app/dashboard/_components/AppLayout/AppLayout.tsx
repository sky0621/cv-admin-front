"use client";

import { Layout } from "antd";
import { ReactNode } from "react";

const { Header, Content } = Layout;

type Props = {
  title: string;
  children: ReactNode;
};

const AppLayout = ({ title, children }: Props) => {
  return (
    <Layout data-id="LAYOUT">
      <Header
        data-id="HEADER"
        style={{
          fontSize: "2rem",
          minWidth: "330px",
        }}
      >
        {title}
      </Header>
      <Content
        data-id="CONTENT"
        style={{
          margin: "18px",
          padding: "18px",
          backgroundColor: "#fff",
          borderRadius: 16,
          minWidth: "330px",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default AppLayout;
