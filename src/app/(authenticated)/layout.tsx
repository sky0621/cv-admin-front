"use client";

import { ReactNode } from "react";
import { Layout } from "antd";
import HeaderContainer from "@/components/header/HeaderContainer";
import SideMenuContainer from "@/components/sidemenu/SideMenuContainer";

const { Sider, Header, Content } = Layout;

type Props = {
  children: ReactNode;
};

const UsersLayout = (props: Props) => {
  return (
    <Layout>
      <Sider>
        <SideMenuContainer />
      </Sider>
      <Layout>
        <Header>
          <HeaderContainer />
        </Header>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default UsersLayout;
