import { ReactNode } from "react";

export default function UsersLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "blue",
        padding: "4px",
      }}
    >
      <div>[UsersLayout]</div>
      <div>{children}</div>
    </div>
  );
}
