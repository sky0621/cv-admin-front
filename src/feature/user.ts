import {
  UserAttribute,
  UserCareer,
  UserCareerGroup,
  UsersApi,
} from "@/lib/api";

export const getAllUsers = (): Promise<UserAttribute[]> => {
  return new UsersApi().usersGet();
};

export const getUserCareerGroup = (
  userId: number,
  careerGroupId: number,
): Promise<UserCareerGroup> => {
  return new UsersApi().usersByUserIdCareergroupsByCareerGroupIdGet({
    byUserId: userId,
    byCareerGroupId: careerGroupId,
  });
};

export const addUserCareerGroup = (
  userId: number,
  userCareerGroup: UserCareerGroup,
): Promise<UserCareerGroup> => {
  return new UsersApi().usersByUserIdCareergroupsPost({
    byUserId: userId,
    userCareerGroup: userCareerGroup,
  });
};

export const addUserCareer = (
  userId: number,
  careerGroupId: number,
  userCareer: UserCareer,
): Promise<UserCareer> => {
  return new UsersApi().usersByUserIdCareergroupsByCareerGroupIdCareersPost({
    byUserId: userId,
    byCareerGroupId: careerGroupId,
    userCareer: userCareer,
  });
};
