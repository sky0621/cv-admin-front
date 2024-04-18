import SkillAddPresenter from "./SkillAddPresenter";

type Props = {
  skillTagId: number;
};

const SkillAddContainer = ({ skillTagId }: Props) => {
  return <SkillAddPresenter skillTagId={skillTagId} />;
};

export default SkillAddContainer;
