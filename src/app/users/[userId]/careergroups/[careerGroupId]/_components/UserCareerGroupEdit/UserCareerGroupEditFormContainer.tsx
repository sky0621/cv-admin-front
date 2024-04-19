import UserCareerGroupEditFormPresenter from "./UserCareerGroupEditFormPresenter";
import { UsersApi } from "@/lib/api";

type Props = {
  userId: number;
  careerGroupId: number;
};

const UserCareerGroupEditFormContainer = async ({
  userId,
  careerGroupId,
}: Props) => {
  const careerGroup =
    await new UsersApi().usersByUserIdCareergroupsByCareerGroupIdGet({
      byUserId: userId,
      byCareerGroupId: careerGroupId,
    });
  return <UserCareerGroupEditFormPresenter careerGroup={careerGroup} />;
};

export default UserCareerGroupEditFormContainer;
