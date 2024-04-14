import { SkillsApi, SkillTag } from "@/lib/api";

export const getAllSkillTags = (): Promise<SkillTag[]> => {
  return new SkillsApi().skilltagsGet();
};

export const getSkillTagBySkillTagId = (
  skillTagId: number,
): Promise<SkillTag> => {
  return new SkillsApi().skilltagsBySkillTagIdGet({
    bySkillTagId: skillTagId,
  });
};
