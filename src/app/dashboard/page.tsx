import Title from "antd/es/typography/Title";
import { SkillTagList } from "./_components/SkillTagList";
import { UserList } from "./_components/UserList";
import { SkillTagAdd } from "./_components/SkillTagAdd";

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
