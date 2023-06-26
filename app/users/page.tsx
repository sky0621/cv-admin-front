import UsersPageMain from "@/components/pages/users";
import Link from "next/link";

export default function UsersPage() {
  return (
    <>
      <UsersPageMain fine={process.env.NEXT_PUBLIC_MY_ENV} />
      <div>
        <Link href="/">To Home</Link>
      </div>
    </>
  );
}
