import UserCareerGroupListPresenter from "./UserCareerGroupListPresenter";
import { UsersApi } from "@/lib/api";

type Props = {
  userId: number;
};

const UserCareerGroupListContainer = async ({ userId }: Props) => {
  const careerGroups = await new UsersApi().usersByUserIdCareergroupsGet({
    byUserId: userId,
  });
  return (
    <UserCareerGroupListPresenter userId={userId} careerGroups={careerGroups} />
  );
};

export default UserCareerGroupListContainer;
