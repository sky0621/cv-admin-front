import Title from "antd/es/typography/Title";
import { SkillTagEditForm } from "./_components/SkillTagEditForm";
import { SkillList } from "./_components/SkillList";
import { SkillAdd } from "@/app/skilltags/[skillTagId]/_components/SkillAdd";
import { Col, Row } from "antd";
import styles from "./styles.module.css";

const SkillTagEditPage = async ({
  params,
}: {
  params: { skillTagId: string };
}) => {
  const skillTagId = Number(params.skillTagId);
  return (
    <>
      <Title level={2}>EditSkillTag</Title>
      <Row className={styles.area}>
        <Col>
          <SkillTagEditForm skillTagId={skillTagId} />
        </Col>
      </Row>
      <Row className={styles.area}>
        <Col>
          <SkillAdd skillTagId={skillTagId} />
        </Col>
      </Row>
      <Row className={styles.area}>
        <SkillList skillTagId={skillTagId} />
      </Row>
    </>
  );
};

export default SkillTagEditPage;
