import { UserCareerAdd } from "./_components/UserCareerAdd";
import { UserCareerGroupEditForm } from "./_components/UserCareerGroupEdit";
import { UserCareerList } from "./_components/UserCareerList";

const CareerGroupPage = ({
  params,
}: {
  params: { userId: string; careerGroupId: string };
}) => {
  const userId = Number(params.userId);
  const careerGroupId = Number(params.careerGroupId);
  return (
    <>
      <UserCareerGroupEditForm userId={userId} careerGroupId={careerGroupId} />
      <UserCareerAdd userId={userId} careerGroupId={careerGroupId} />
      <UserCareerList userId={userId} careerGroupId={careerGroupId} />
    </>
  );
};

export default CareerGroupPage;
