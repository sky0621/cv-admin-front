import { SkillsApi } from "@/lib/api";
import SkillTagEditFormPresenter from "@/app/skilltags/[id]/_components/SkillTagEditForm/SkillTagEditFormPresenter";

type Props = {
  skillTagId: string;
};

const SkillTagEditFormContainer = async ({ skillTagId }: Props) => {
  const skillTag = await new SkillsApi().skilltagsBySkillTagIdGet({
    bySkillTagId: Number(skillTagId),
  });

  return <SkillTagEditFormPresenter skillTag={skillTag} />;
};

export default SkillTagEditFormContainer;
