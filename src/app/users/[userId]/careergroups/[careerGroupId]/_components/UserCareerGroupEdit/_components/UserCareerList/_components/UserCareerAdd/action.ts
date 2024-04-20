"use server";

import { SkillTag, UserCareer } from "@/lib/api";
import { addUserCareer } from "@/feature/user";

export const addUserCareerServerAction = (
  userId: number,
  careerGroupId: number,
  userCareer: UserCareer,
): Promise<SkillTag> => {
  return addUserCareer(userId, careerGroupId, userCareer);
};
