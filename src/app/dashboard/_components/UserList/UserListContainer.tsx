import UserListPresenter from "./UserListPresenter";
import { getAllUsers } from "@/feature/user";

const UserListContainer = async () => {
  const users = await getAllUsers();
  return <UserListPresenter users={users} />;
};

export default UserListContainer;
