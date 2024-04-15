import UserCareerPresenter from "@/app/users/[id]/_components/UserCareer/UserCareerPresenter";

type Props = {
  userId: number;
};

const UserCareerContainer = async ({ userId }: Props) => {
  //
  return <UserCareerPresenter userId={userId} />;
};

export default UserCareerContainer;
