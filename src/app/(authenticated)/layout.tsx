"use client";

import { ReactNode } from "react";
import { Layout } from "antd";
import HeaderContainer from "@/components/header/HeaderContainer";

const { Header, Content } = Layout;

type Props = {
  children: ReactNode;
};

const UsersLayout = (props: Props) => {
  return (
    <Layout>
      <Header>
        <HeaderContainer />
      </Header>
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default UsersLayout;
