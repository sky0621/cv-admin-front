import { ReactNode } from "react";

export default function SkilltagsLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "yellow",
        padding: "4px",
      }}
    >
      <div>[SkilltagsLayout]</div>
      <div>{children}</div>
    </div>
  );
}
