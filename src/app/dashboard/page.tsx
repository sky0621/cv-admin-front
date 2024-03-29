import Title from "antd/es/typography/Title";
import { SkillTagList } from "@/app/dashboard/_components/SkillTagList";
import { UserList } from "@/app/dashboard/_components/UserList";

const DashboardPage = () => {
  return (
    <>
      <Title level={2}>Dashboard</Title>
      <UserList />
      <SkillTagList />
    </>
  );
};

export default DashboardPage;
