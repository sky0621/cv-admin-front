"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SkilltagsPage() {
  const router = useRouter();
  return (
    <>
      <div>Skilltags</div>
      <div>
        <button
          type="button"
          onClick={() => {
            router.push("/");
          }}
        >
          To Home
        </button>
      </div>
      <div>
        <Link href="skilltags/1">SKILLTAG 1</Link>
      </div>
    </>
  );
}
