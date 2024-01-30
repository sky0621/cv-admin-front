import Title from "antd/es/typography/Title";
import { UserEditForm } from "@/app/users/[id]/_components/UserEditForm";

const UserEditPage = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Title level={2}>EditUser</Title>
      <UserEditForm userId={params.id} />
    </>
  );
};

export default UserEditPage;
