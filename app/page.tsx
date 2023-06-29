import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <div>
        <Link href="/users">USERS</Link>
      </div>
      <div>
        <Link href="/users2">USERS2</Link>
      </div>
      <div>
        <Link href="/skilltags">SKILLTAGS</Link>
      </div>
      <div>
        <Link href="/books">BOOKS</Link>
      </div>
      <div>
        <Link href="/throwerror">THROWERROR</Link>
      </div>
      <div>
        <Link href="/throwcomponenterror">THROWCOMPONENTERROR</Link>
      </div>
      <div>
        <Link href="/photos/1">Photos/1</Link>
      </div>
    </>
  );
}
