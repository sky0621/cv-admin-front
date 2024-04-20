import UserCareerAddPresenter from "./UserCareerAddPresenter";

type Props = {
  userId: number;
  careerGroupId: number;
};

const UserCareerAddContainer = ({ userId, careerGroupId }: Props) => {
  return (
    <UserCareerAddPresenter userId={userId} careerGroupId={careerGroupId} />
  );
};

export default UserCareerAddContainer;
