import Title from "antd/es/typography/Title";
import { SkillTagEditForm } from "./_components/SkillTagEditForm";
import { SkillList } from "./_components/SkillList";
import { SkillAdd } from "@/app/skilltags/[id]/_components/SkillAdd";

const SkillTagEditPage = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Title level={2}>EditSkillTag</Title>
      <SkillTagEditForm skillTagId={params.id} />
      <SkillAdd skillTagId={params.id} />
      <SkillList skillTagId={params.id} />
    </>
  );
};

export default SkillTagEditPage;
