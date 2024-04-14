"use server";

import { SkillTag } from "@/lib/api";
import { addSkillTag } from "@/feature/skillTag";

export const addSkillTagServerAction = (
  skillTag: SkillTag,
): Promise<SkillTag> => {
  return addSkillTag(skillTag);
};
