import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch("http://localhost:3000/api/posts");
  const resJSON = await res.json();
  console.log(resJSON["post"]);
  return (
    <>
      <div>
        {resJSON["post"].map((p: any) => {
          return <div>{p.title}</div>;
        })}
      </div>
      <div>&nbsp;</div>
      <div>
        <Link href="/">To Home</Link>
      </div>
    </>
  );
}
