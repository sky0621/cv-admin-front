import SkillListPresenter from "./SkillListPresenter";
import { getSkillsBySkillTagId } from "@/feature/skill";
import { getSkillTagBySkillTagId } from "@/feature/skillTag";

type Props = {
  skillTagId: number;
};

const SkillListContainer = async ({ skillTagId }: Props) => {
  const skillTag = await getSkillTagBySkillTagId(skillTagId);
  const skills = await getSkillsBySkillTagId(skillTagId);
  return <SkillListPresenter skills={skills} />;
};

export default SkillListContainer;
