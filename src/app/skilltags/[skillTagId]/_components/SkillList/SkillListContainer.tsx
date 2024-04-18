import SkillListPresenter from "./SkillListPresenter";
import { getSkillsBySkillTagId } from "@/feature/skill";

type Props = {
  skillTagId: number;
};

const SkillListContainer = async ({ skillTagId }: Props) => {
  const skills = await getSkillsBySkillTagId(skillTagId);
  return <SkillListPresenter skillTagId={skillTagId} skills={skills} />;
};

export default SkillListContainer;
