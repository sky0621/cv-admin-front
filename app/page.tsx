import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <div>
        <Link href="/users">USERS</Link>
      </div>
      <div>
        <Link href="/skilltags">SKILLTAGS</Link>
      </div>
      <div>
        <Link href="/books">BOOKS</Link>
      </div>
    </>
  );
}
