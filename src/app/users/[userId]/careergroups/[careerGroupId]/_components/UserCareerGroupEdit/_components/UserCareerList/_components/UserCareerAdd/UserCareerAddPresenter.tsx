"use client";

import { PlusCircleOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./styles.module.css";
import { useUserCareerAdd } from "./useUserCareerAdd";
import { MinusCircleOutlined } from "@ant-design/icons";

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
            <div>Name</div>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input style={{ width: "60%" }} />
            </Form.Item>
            <div>Description</div>
            <Form.List
              name="description"
              rules={[
                {
                  validator: async (_, descriptions) => {
                    if (!descriptions || descriptions.length < 1) {
                      return Promise.reject(
                        new Error("At least 1 descriptions"),
                      );
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, idx) => (
                    <Form.Item key={field.key}>
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input description or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "60%" }}
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
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
