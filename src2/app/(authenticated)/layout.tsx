import { ReactNode } from "react";
import HeaderContainer from "@/components/header/HeaderContainer";
import SideMenuContainer from "@/components/sidemenu/SideMenuContainer";
import Layout from "@/components/wrapper/Layout";
import Content from "@/components/wrapper/Content";

type Props = {
  children: ReactNode;
};

const UsersLayout = (props: Props) => {
  return (
    <Layout>
      <SideMenuContainer />
      <Layout>
        <HeaderContainer />
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default UsersLayout;
