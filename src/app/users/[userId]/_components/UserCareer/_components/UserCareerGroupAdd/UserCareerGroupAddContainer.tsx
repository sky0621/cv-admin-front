import UserCareerGroupAddPresenter from "./UserCareerGroupAddPresenter";

type Props = {
  userId: number;
};

const UserCareerGroupAddContainer = ({ userId }: Props) => {
  return <UserCareerGroupAddPresenter userId={userId} />;
};

export default UserCareerGroupAddContainer;
