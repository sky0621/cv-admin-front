"use client";

import { Layout } from "antd";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Content = (props: Props) => {
  return <Layout.Content children={props.children} />;
};

export default Content;
