import SkillTagListPresenter from "@/app/dashboard/_components/SkillTagList/SkillTagListPresenter";
import { SkillsApi } from "@/lib/api";

const SkillTagListContainer = async () => {
  const skillTags = await new SkillsApi().skilltagsGet();
  console.table(skillTags);
  return <SkillTagListPresenter skillTags={skillTags} />;
};

export default SkillTagListContainer;
