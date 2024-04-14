"use client";

import { useSkillAdd } from "./useSkillAdd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./styles.module.css";

type Props = {
  skillTagId: number;
};

const SkillAddPresenter = ({ skillTagId }: Props) => {
  const { isShowModal, openModal, closeModal, addSkill, contextHolder } =
    useSkillAdd(skillTagId);
  return (
    <>
      {contextHolder}
      {isShowModal && (
        <Modal
          open={true}
          closable={false}
          centered={true}
          cancelButtonProps={{ disabled: true, className: styles.cancel }}
          okButtonProps={{ disabled: true, className: styles.cancel }}
        >
          <Title level={3}>Add Skill Form</Title>
          <Form onFinish={addSkill}>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item name="url">
              <Input placeholder="URL" />
            </Form.Item>
            <Form.Item>
              <Row>
                <Col span={5}>
                  <Button type="default" onClick={closeModal}>
                    Cancel
                  </Button>
                </Col>
                <Col span={5}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Modal>
      )}
      {!isShowModal && (
        <PlusCircleOutlined className={styles.plusButton} onClick={openModal} />
      )}
    </>
  );
};

export default SkillAddPresenter;
