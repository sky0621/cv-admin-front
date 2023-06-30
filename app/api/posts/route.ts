import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("GET");
  console.log(request);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const post = await res.json();
  return NextResponse.json({ post });
}
