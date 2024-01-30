import { Skill } from "@/lib/api";
import { useEffect, useState } from "react";

export const useSkillList = (_skills: Skill[]) => {
  const [skills, setSkills] = useState<Skill[]>();

  const toSkillKey = (id: string | undefined) => {
    if (id) {
      return id;
    }
    return "";
  };

  useEffect(() => {
    setSkills(
      _skills.map(
        (skill) =>
          ({
            ...skill,
            key: toSkillKey(skill.key),
          }) as unknown as Skill,
      ),
    );
  }, [skills]);

  return { skills };
};
