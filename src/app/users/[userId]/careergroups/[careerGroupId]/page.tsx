import { UserCareerGroupEditForm } from "./_components/UserCareerGroupEdit";

const CareerGroupPage = ({
  params,
}: {
  params: { userId: string; careerGroupId: string };
}) => {
  const userId = Number(params.userId);
  const careerGroupId = Number(params.careerGroupId);
  return (
    <UserCareerGroupEditForm userId={userId} careerGroupId={careerGroupId} />
  );
};

export default CareerGroupPage;
