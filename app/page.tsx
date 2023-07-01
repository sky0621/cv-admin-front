import Link from "next/link";

export default async function Home() {
  await (() => {
    setTimeout(() => {
      console.log("home");
    }, 1000);
  })();
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
        <Link href="/throwcomponenterror">THROWCOMPONENTERROR</Link>
      </div>
      <div>
        <Link href="/photos/1">Photos/1</Link>
      </div>
      <div>
        <Link href="/settings/1">settings/1</Link>
      </div>
      <div>
        <Link href="/settings/2">settings/2</Link>
      </div>
      <div>
        <Link href="/posts">posts</Link>
      </div>
      <div>
        <Link href="/users3/1">users3/1</Link>
      </div>
    </>
  );
}