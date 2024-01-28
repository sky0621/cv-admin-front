"use client";

import { Layout } from "antd";
import { UserSelect } from "@/components/userselect";

const { Sider } = Layout;

const SideMenuClientComponent = () => {
  return (
    <Sider>
      <UserSelect />
    </Sider>
  );
};

export default SideMenuClientComponent;
