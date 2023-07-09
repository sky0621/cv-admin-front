"use client";

import { Layout } from "antd";
import { ReactNode } from "react";

const { Header } = Layout;

type Props = {
  children: ReactNode;
};
const HeaderComponent = (props: Props) => {
  return <Header>{props.children}</Header>;
};

export default HeaderComponent;
