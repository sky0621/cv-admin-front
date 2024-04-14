import Title from "antd/es/typography/Title";
import { UserEditForm } from "@/app/users/[id]/_components/UserEditForm";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryFallback } from "@/app/_components/ErrorBoundaryFallback";

const UserEditPage = async ({ params }: { params: { id: string } }) => {
  const userId = Number(params.id);
  return (
    <>
      <Title level={2}>EditUser</Title>
      <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
        <UserEditForm userId={userId} />
      </ErrorBoundary>
    </>
  );
};

export default UserEditPage;
