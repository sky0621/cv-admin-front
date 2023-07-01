import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/books")) {
    console.log("books !!!!!!");
    return NextResponse.redirect(new URL("http://localhost:3000/users"));
  }
}
