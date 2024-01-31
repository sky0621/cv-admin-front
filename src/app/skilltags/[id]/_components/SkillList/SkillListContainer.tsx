import { SkillsApi } from "@/lib/api";
import SkillListPresenter from "./SkillListPresenter";

type Props = {
  skillTagId: string;
};

const SkillListContainer = async ({ skillTagId }: Props) => {
  const skills = await new SkillsApi().skillsGet({ tag: Number(skillTagId) });

  return <SkillListPresenter skills={skills} />;
};

export default SkillListContainer;
