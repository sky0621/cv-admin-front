import { UsersApi } from "@/lib/api";

const UsersPage = async () => {
  const users = await new UsersApi().usersGet();
  return (
    <>
      <div>UserList</div>
      <div>
        {users.map((user) => (
          <div>{user.name}</div>
        ))}
      </div>
    </>
  );
};

export default UsersPage;
