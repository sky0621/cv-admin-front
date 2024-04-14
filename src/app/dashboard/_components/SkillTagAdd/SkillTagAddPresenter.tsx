"use client";

import { useSkillTagAdd } from "./useSkillTagAdd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./styles.module.css";

const SkillTagAddPresenter = () => {
  const { isShowModal, openModal, closeModal, addSkillTag, contextHolder } =
    useSkillTagAdd();
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
          <Title level={3}>Add SkillTag Form</Title>
          <Form onFinish={addSkillTag}>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input placeholder="Name" />
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

export default SkillTagAddPresenter;
