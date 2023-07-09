import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  const nextPath = request.nextUrl.pathname;
  if (nextPath.startsWith("/_next")) {
    return NextResponse.next();
  }
  if (nextPath === "/favicon.ico") {
    return NextResponse.next();
  }
  console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
  console.log(request.nextUrl.pathname);
  console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
  return NextResponse.next();
};

export default middleware;
