import Title from "antd/es/typography/Title";
import { UserList } from "@/app/dashboard/_components/UserList";

const DashboardPage = () => {
  return (
    <>
      <Title level={2}>Dashboard</Title>
      <UserList />
    </>
  );
};

export default DashboardPage;
