"use client";

import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./styles.module.css";
import { useUserCareerAdd } from "./useUserCareerAdd";

type Props = {
  userId: number;
  careerGroupId: number;
};

const UserCareerAddPresenter = ({ userId, careerGroupId }: Props) => {
  const { isShowModal, openModal, closeModal, addUserCareer, contextHolder } =
    useUserCareerAdd(userId, careerGroupId);
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
          <Title level={3}>Add UserCareer Form</Title>
          <Form onFinish={addUserCareer}>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input placeholder="Name" />
            </Form.Item>
            <Form.List name="description">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, idx) => (
                    <Form.Item
                      label={idx === 0 ? "Description" : ""}
                      key={field.key}
                    >
                      <Form.Item>
                        <Input />
                      </Form.Item>
                    </Form.Item>
                  ))}
                </>
              )}
            </Form.List>
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

export default UserCareerAddPresenter;
