import { UserAttribute } from "@/lib/api";
import { useEffect, useState } from "react";

type UserAttributeWithKey = UserAttribute & "key";

export const useUserList = (users: UserAttribute[]) => {
  const [userAttributeWithKeys, setUserAttributeWithKeys] =
    useState<UserAttributeWithKey[]>();

  const toUserKey = (id: number | undefined) => {
    if (id) {
      return String(id);
    }
    return "";
  };

  useEffect(() => {
    setUserAttributeWithKeys(
      users.map(
        (user) =>
          ({
            ...user,
            key: toUserKey(user.id),
          }) as unknown as UserAttributeWithKey,
      ),
    );
  }, [users]);

  return { userAttributeWithKeys };
};
