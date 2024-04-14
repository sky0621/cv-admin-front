"use server";

import { addSkill } from "@/feature/skill";
import { Skill } from "@/lib/api";

export const addSkillServerAction = (skill: Skill): Promise<Skill> => {
  return addSkill(skill);
};
