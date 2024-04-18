import SkillTagListPresenter from "./SkillTagListPresenter";
import { getAllSkillTags } from "@/feature/skillTag";

const SkillTagListContainer = async () => {
  const skillTags = await getAllSkillTags();
  return <SkillTagListPresenter skillTags={skillTags} />;
};

export default SkillTagListContainer;
