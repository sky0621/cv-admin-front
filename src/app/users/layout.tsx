"use client";

import { ReactNode } from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;

type Props = {
  header: ReactNode;
  children: ReactNode;
};

const UsersLayout = (props: Props) => {
  return (
    <Layout>
      <Header>{props.header}</Header>
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default UsersLayout;
