import UserListPresenter from "@/app/dashboard/_components/UserList/UserListPresenter";
import { UsersApi } from "@/lib/api";

const UserListContainer = async () => {
  const users = await new UsersApi().usersGet();
  return <UserListPresenter users={users} />;
};

export default UserListContainer;
