import UserEditFormPresenter from "@/app/users/[id]/_components/UserEditForm/UserEditFormPresenter";
import { UsersApi } from "@/lib/api";

type Props = {
  userId: string;
};

const UserEditFormContainer = async ({ userId }: Props) => {
  console.info(userId);
  const raws = await new UsersApi().usersGetRaw();

  return <UserEditFormPresenter />;
};

export default UserEditFormContainer;
