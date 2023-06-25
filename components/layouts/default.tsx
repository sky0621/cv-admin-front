import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div>[DEFAULT LAYOUT]</div>
      <div>{children}</div>
    </main>
  );
}
