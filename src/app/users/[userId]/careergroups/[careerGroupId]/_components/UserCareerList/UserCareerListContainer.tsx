import { CareerPeriodFrom, UserCareer, UsersApi } from "@/lib/api";
import UserCareerListPresenter from "./UserCareerListPresenter";

type ColumnType = Omit<UserCareer, "careers">;

type Props = {
  userId: number;
  careerGroupId: number;
};

const UserCareerListContainer = async ({ userId, careerGroupId }: Props) => {
  const careerGroup =
    await new UsersApi().usersByUserIdCareergroupsByCareerGroupIdGet({
      byUserId: userId,
      byCareerGroupId: careerGroupId,
    });
  return (
    <UserCareerListPresenter
      userId={userId}
      careerGroupId={careerGroupId}
      careers={careerGroup.careers}
    />
  );
};

export default UserCareerListContainer;
