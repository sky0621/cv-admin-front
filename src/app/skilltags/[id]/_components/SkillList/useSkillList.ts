import { Skill, UserAttribute } from "@/lib/api";
import { useEffect, useState } from "react";

type UserAttributeWithKey = Skill & "key";

export const useSkillList = (users: UserAttribute[]) => {
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
