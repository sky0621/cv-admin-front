"use client";

import { Button } from "antd";
import Title from "antd/es/typography/Title";

const DashboardPage = () => {
  const click = async () => {
    alert("click");
  };

  return (
    <>
      <Title level={2}>Dashboard</Title>
      <Button onClick={click}>push</Button>
    </>
  );
};

export default DashboardPage;
