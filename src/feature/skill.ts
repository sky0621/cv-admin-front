import { Skill, SkillsApi } from "@/lib/api";

export const getSkills = (): Promise<Skill[]> => {
  return new SkillsApi().skillsGet();
};

export const getSkillsBySkillTagId = (skillTagId: number): Promise<Skill[]> => {
  return new SkillsApi().skillsGet({ tag: skillTagId });
};

export const addSkill = (skill: Skill): Promise<Skill> => {
  return new SkillsApi().skillsPost({ skill });
};
