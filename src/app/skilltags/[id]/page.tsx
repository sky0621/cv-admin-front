import Title from "antd/es/typography/Title";
import { SkillTagEditForm } from "./_components/SkillTagEditForm";
import { SkillList } from "./_components/SkillList";
import { SkillAdd } from "@/app/skilltags/[id]/_components/SkillAdd";

const SkillTagEditPage = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Title level={2}>EditSkillTag</Title>
      <div>
        <SkillTagEditForm skillTagId={params.id} />
      </div>
      <div>
        <SkillAdd skillTagId={params.id} />
      </div>
      <div>
        <SkillList skillTagId={params.id} />
      </div>
    </>
  );
};

export default SkillTagEditPage;
