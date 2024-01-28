"use client";

import { Button } from "antd";

const DashboardPage = () => {
  const click = async () => {
    alert("click");
  };

  return (
    <>
      <div>Dashboard</div>
      <Button onClick={click}>push</Button>
    </>
  );
};

export default DashboardPage;
