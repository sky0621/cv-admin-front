"use server";

import { UserCareer } from "@/lib/api";
import { addUserCareer } from "@/feature/user";

export const addUserCareerServerAction = (
  userId: number,
  careerGroupId: number,
  userCareer: UserCareer,
): Promise<UserCareer> => {
  return addUserCareer(userId, careerGroupId, userCareer);
};
