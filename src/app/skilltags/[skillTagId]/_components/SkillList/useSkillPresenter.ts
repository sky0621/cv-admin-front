import { Skill } from "@/lib/api";
import { useEffect, useState } from "react";

type SkillWithKey = Skill & "key";

export const useSkillList = (skills: Skill[]) => {
  const [skillWithKeys, setSkillWithKeys] = useState<SkillWithKey[]>();

  const toSkillKey = (id: number | undefined) => {
    if (id) {
      return String(id);
    }
    return "";
  };

  useEffect(() => {
    setSkillWithKeys(
      skills.map(
        (user) =>
          ({
            ...user,
            key: toSkillKey(user.id),
          }) as unknown as SkillWithKey,
      ),
    );
  }, [skills]);

  return { skillWithKeys };
};
