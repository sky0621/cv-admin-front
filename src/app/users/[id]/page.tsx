import { Tabs, TabsProps } from "antd";
import { UserBasic } from "@/app/users/[id]/_components/UserBasic";
import { UserCareer } from "@/app/users/[id]/_components/UserCareer";

const UserEditPage = async ({ params }: { params: { id: string } }) => {
  const userId = Number(params.id);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Basic",
      children: <UserBasic userId={userId} />,
    },
    {
      key: "2",
      label: "Career",
      children: <UserCareer userId={userId} />,
    },
    {
      key: "3",
      label: "Skill",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Note",
      children: "Content of Tab Pane 4",
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default UserEditPage;
