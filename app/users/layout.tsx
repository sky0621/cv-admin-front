import { ReactNode } from "react";

export default function UsersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>[UsersLayout]</div>
      <div>{children}</div>
    </>
  );
}
