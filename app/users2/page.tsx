import UsersPageMain from "@/_components/pages/users";
import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
};

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users2");
  const users: User[] = await response.json();
  return users;
};

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <>
      <UsersPageMain fine={process.env.NEXT_PUBLIC_MY_ENV} />
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
      <div>
        <Link href="/">To Home</Link>
      </div>
    </>
  );
}
