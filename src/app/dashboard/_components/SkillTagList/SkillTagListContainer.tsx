import SkillTagListPresenter from "@/app/dashboard/_components/SkillTagList/SkillTagListPresenter";
import { getAllSkillTags } from "@/feature/skillTag";

const SkillTagListContainer = async () => {
  const skillTags = await getAllSkillTags();
  return <SkillTagListPresenter skillTags={skillTags} />;
};

export default SkillTagListContainer;
