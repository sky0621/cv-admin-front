"use client";

import { Layout } from "antd";
import { ReactNode } from "react";

const { Sider, Header, Content } = Layout;

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Sider>xxx</Sider>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            fontSize: "2rem",
          }}
        >
          CV-Admin-front
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
