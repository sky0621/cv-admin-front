import Title from "antd/es/typography/Title";
import { SkillTagList } from "@/app/dashboard/_components/SkillTagList";
import { UserList } from "@/app/dashboard/_components/UserList";
import { SkillTagAdd } from "@/app/dashboard/_components/SkillTagAdd";

const DashboardPage = () => {
  return (
    <>
      <Title level={2}>Dashboard</Title>
      <UserList />
      <SkillTagAdd />
      <SkillTagList />
    </>
  );
};

export default DashboardPage;
