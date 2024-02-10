"use client";

import { useSkillAdd } from "@/app/skilltags/[id]/_components/SkillAdd/useSkillAdd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./styles.module.css";

type Props = {
  addSkill: () => void;
};

const SkillAddPresenter = () => {
  const { isShowModal, openModal, closeModal, addSkill } = useSkillAdd();
  return (
    <>
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
            <Form.Item name="code" rules={[{ required: true }]}>
              <Input placeholder="Code" />
            </Form.Item>
            <Form.Item name="url">
              <Input placeholder="URL" />
            </Form.Item>
            <Form.Item>
              <div style={{ display: "inline-block", marginRight: "12px" }}>
                <Button type="default" onClick={closeModal}>
                  Cancel
                </Button>
              </div>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
      {!isShowModal && (
        <PlusCircleOutlined
          style={{ fontSize: "48px", color: "purple" }}
          onClick={openModal}
        />
      )}
    </>
  );
};

export default SkillAddPresenter;
