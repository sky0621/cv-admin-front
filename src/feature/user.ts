import { UserAttribute, UsersApi } from "@/lib/api";

export const getAllUsers = (): Promise<UserAttribute[]> => {
  return new UsersApi().usersGet();
};
