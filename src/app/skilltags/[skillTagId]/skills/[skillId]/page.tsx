import Title from "antd/es/typography/Title";

const SkillEditPage = async ({ params }: { params: { skillId: string } }) => {
  return (
    <>
      <Title level={2}>EditSkill</Title>
      <div>ID:{params.skillId}</div>
    </>
  );
};

export default SkillEditPage;
