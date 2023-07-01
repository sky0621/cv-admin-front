import { NextRequest } from "next/server";

export function isAuthenticated(request: NextRequest): boolean {
  const authorization = request.headers.get("Authorization");
  return authorization !== null;
}
