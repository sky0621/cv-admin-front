import Title from "antd/es/typography/Title";
import { SkillTagEditForm } from "./_components/SkillTagEditForm";
import { SkillList } from "./_components/SkillList";

const SkillTagEditPage = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Title level={2}>EditSkillTag</Title>
      <SkillTagEditForm skillTagId={params.id} />
      <SkillList skillTagId={params.id} />
    </>
  );
};

export default SkillTagEditPage;
