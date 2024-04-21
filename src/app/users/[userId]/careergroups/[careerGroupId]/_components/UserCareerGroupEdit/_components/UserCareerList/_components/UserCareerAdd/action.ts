"use server";

import { SkillTag, UserCareer } from "@/lib/api";
import { addUserCareer } from "@/feature/user";

export const addUserCareerServerAction = (
  userId: number,
  careerGroupId: number,
  userCareer: UserCareer,
): Promise<UserCareer> => {
  //  return addUserCareer(userId, careerGroupId, userCareer);
  // @ts-ignore
  console.info(userCareer);
  return new Promise<UserCareer>({} as UserCareer);
};
