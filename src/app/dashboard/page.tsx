import Title from "antd/es/typography/Title";
import { UserList } from "@/app/dashboard/_components/UserList";
import { SkillTagList } from "@/app/dashboard/_components/SkillTagList";

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
