import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <main
      style={{
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "red",
        padding: "4px",
      }}
    >
      <div>[DEFAULT LAYOUT]</div>
      <div>{children}</div>
    </main>
  );
}
