import { SkillTag } from "@/lib/api";
import { useEffect, useState } from "react";

type SkillTagWithKey = SkillTag & "key";

export const useSkillTagList = (skillTags: SkillTag[]) => {
  const [skillTagWithKeys, setSkillTagWithKeys] = useState<SkillTagWithKey[]>();

  const toSkillTagKey = (id: number | undefined) => {
    if (id) {
      return String(id);
    }
    return "";
  };

  useEffect(() => {
    setSkillTagWithKeys(
      skillTags.map(
        (skillTag) =>
          ({
            ...skillTag,
            key: toSkillTagKey(skillTag.id),
          }) as unknown as SkillTagWithKey,
      ),
    );
  }, [skillTags]);

  return { skillTagWithKeys };
};
