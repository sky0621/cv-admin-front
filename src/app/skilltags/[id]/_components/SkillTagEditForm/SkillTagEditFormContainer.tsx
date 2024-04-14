import SkillTagEditFormPresenter from "@/app/skilltags/[id]/_components/SkillTagEditForm/SkillTagEditFormPresenter";
import { getSkillTagBySkillTagId } from "@/feature/skillTag";

type Props = {
  skillTagId: number;
};

const SkillTagEditFormContainer = async ({ skillTagId }: Props) => {
  const skillTag = await getSkillTagBySkillTagId(skillTagId);
  return <SkillTagEditFormPresenter skillTag={skillTag} />;
};

export default SkillTagEditFormContainer;
