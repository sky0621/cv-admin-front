import SkillAddPresenter from "@/app/skilltags/[id]/_components/SkillAdd/SkillAddPresenter";

type Props = {
  skillTagId: string;
};

const SkillAddContainer = ({ skillTagId }: Props) => {
  return <SkillAddPresenter />;
};

export default SkillAddContainer;
