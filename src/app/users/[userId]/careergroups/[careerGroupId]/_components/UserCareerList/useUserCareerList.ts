import { UserCareer } from "@/lib/api";
import { useEffect, useState } from "react";

type UserCareerWithKey = UserCareer & "key";

export const useUserCareerList = (careers: UserCareer[] | undefined) => {
  const [userCareerWithKeys, setUserCareerWithKeys] =
    useState<UserCareerWithKey[]>();

  const toUserKey = (id: number | undefined) => {
    if (id) {
      return String(id);
    }
    return "";
  };

  useEffect(() => {
    if (!careers) return;
    setUserCareerWithKeys(
      careers.map(
        (career) =>
          ({
            ...career,
            key: toUserKey(career.id),
          }) as unknown as UserCareerWithKey,
      ),
    );
  }, [careers]);

  return { userCareerWithKeys };
};
