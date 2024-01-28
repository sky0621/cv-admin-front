"use client";

import { Layout as AntdLayout } from "antd";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return <AntdLayout children={props.children} />;
};

export default Layout;
