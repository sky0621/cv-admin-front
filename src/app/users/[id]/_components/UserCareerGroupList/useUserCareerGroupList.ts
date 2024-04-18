import { UserCareerGroup } from "@/lib/api";
import { useEffect, useState } from "react";

type UserCareerGroupWithKey = UserCareerGroup & "key";

export const useUserCareerGroupList = (careerGroups: UserCareerGroup[]) => {
  const [userCareerGroupWithKeys, setUserCareerGroupWithKeys] =
    useState<UserCareerGroupWithKey[]>();

  const toUserKey = (id: number | undefined) => {
    if (id) {
      return String(id);
    }
    return "";
  };

  useEffect(() => {
    setUserCareerGroupWithKeys(
      careerGroups.map(
        (careerGroup) =>
          ({
            ...careerGroup,
            key: toUserKey(careerGroup.id),
          }) as unknown as UserCareerGroupWithKey,
      ),
    );
  }, [careerGroups]);

  return { userCareerGroupWithKeys };
};
