import UserCareerPresenter from "@/app/users/[id]/_components/UserCareer/UserCareerPresenter";
import { UsersApi } from "@/lib/api";

type Props = {
  userId: number;
};

const UserCareerContainer = async ({ userId }: Props) => {
  const careerGroups = await new UsersApi().usersByUserIdCareergroupsGet({
    byUserId: userId,
  });
  return <UserCareerPresenter userId={userId} careerGroups={careerGroups} />;
};

export default UserCareerContainer;
