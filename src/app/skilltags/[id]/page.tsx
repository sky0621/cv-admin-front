import Title from "antd/es/typography/Title";
import { SkillTagEditForm } from "./_components/SkillTagEditForm";
import { SkillList } from "./_components/SkillList";
import { SkillAdd } from "@/app/skilltags/[id]/_components/SkillAdd";

const SkillTagEditPage = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Title level={2}>EditSkillTag</Title>
      <div style={{ padding: "12px 0" }}>
        <SkillTagEditForm skillTagId={params.id} />
      </div>
      <div style={{ padding: "12px 0" }}>
        <SkillAdd skillTagId={params.id} />
      </div>
      <div style={{ padding: "12px 0" }}>
        <SkillList skillTagId={params.id} />
      </div>
    </>
  );
};

export default SkillTagEditPage;
