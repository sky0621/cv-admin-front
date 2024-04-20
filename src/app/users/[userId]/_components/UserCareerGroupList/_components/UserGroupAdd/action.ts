"use server";

import { SkillTag, UserCareerGroup } from "@/lib/api";
import { addUserCareerGroup } from "@/feature/user";

export const addUserGroupServerAction = (
  userId: number,
  userCareerGroup: UserCareerGroup,
): Promise<SkillTag> => {
  return addUserCareerGroup(userId, userCareerGroup);
};
