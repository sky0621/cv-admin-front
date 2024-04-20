"use client";

import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./styles.module.css";
import { useUserCareerGroupAdd } from "@/app/users/[userId]/_components/UserCareerGroupList/_components/UserCareerGroupAdd/useUserCareerGroupAdd";

type Props = {
  userId: number;
};

const UserCareerGroupAddPresenter = ({ userId }: Props) => {
  const {
    isShowModal,
    openModal,
    closeModal,
    addUserCareerGroup,
    contextHolder,
  } = useUserCareerGroupAdd(userId);
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
          <Title level={3}>Add UserCareerGroup Form</Title>
          <Form onFinish={addUserCareerGroup}>
            <Form.Item name="label" rules={[{ required: true }]}>
              <Input placeholder="Label" />
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

export default UserCareerGroupAddPresenter;
