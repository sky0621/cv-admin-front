import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("GET");
  console.log(request.url);
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  const id = searchParams.get("id");
  console.log(id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const post = await res.json();
  return NextResponse.json({ post });
}
