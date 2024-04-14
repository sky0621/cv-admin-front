import { UsersApi } from "@/lib/api";
import { UserAttributeEditForm } from "./_components/UserAttributeEditForm";
import { UserActivitiesEditForm } from "./_components/UserActivitiesEditForm";
import { UserQualificationsEditForm } from "./_components/UserQualificationsEditForm";
import { Divider } from "antd";

type Props = {
  userId: number;
};

const UserEditFormContainer = async ({ userId }: Props) => {
  console.info(userId);
  const usersApi = new UsersApi();
  const results = await Promise.all([
    usersApi.usersByUserIdAttributeGet({
      byUserId: userId,
    }),
    usersApi.usersByUserIdActivitiesGet({ byUserId: userId }),
    usersApi.usersByUserIdQualificationsGet({ byUserId: userId }),
  ]);
  const attribute = results[0];
  const activities = results[1];
  const qualifications = results[2];

  return (
    <>
      <UserAttributeEditForm attribute={attribute} />
      <Divider />
      <UserActivitiesEditForm activities={activities} />
      <Divider />
      <UserQualificationsEditForm qualifications={qualifications} />
    </>
  );
};

export default UserEditFormContainer;
