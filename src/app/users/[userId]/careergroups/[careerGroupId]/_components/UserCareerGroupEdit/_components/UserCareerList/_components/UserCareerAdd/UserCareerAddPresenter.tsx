"use client";

import {
  CloseOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Space,
} from "antd";
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
            <div>Name</div>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input style={{ width: "80%" }} />
            </Form.Item>
            <div>Description</div>
            <Form.List
              name="description"
              rules={[
                {
                  validator: async (_, description) => {
                    if (!description || description.length < 1) {
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
                        <Input style={{ width: "80%" }} />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className={styles.dynamicDeleteButton}
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
            <div>From</div>
            <Form.Item name="fromYear" rules={[{ required: true }]}>
              <InputNumber placeholder="year" style={{ width: "15%" }} />
            </Form.Item>
            <Form.Item name="fromMonth" rules={[{ required: true }]}>
              <InputNumber placeholder="month" style={{ width: "15%" }} />
            </Form.Item>
            <div>To</div>
            <Form.Item name="toYear" rules={[{ required: true }]}>
              <InputNumber placeholder="year" style={{ width: "15%" }} />
            </Form.Item>
            <Form.Item name="toMonth" rules={[{ required: true }]}>
              <InputNumber placeholder="month" style={{ width: "15%" }} />
            </Form.Item>
            <div>Task</div>
            <Form.List name="tasks">
              {(fields, { add, remove }) => (
                <div
                  style={{
                    display: "flex",
                    rowGap: 16,
                    flexDirection: "column",
                  }}
                >
                  {fields.map((field) => (
                    <Card
                      size="small"
                      title={`Task ${field.name + 1}`}
                      key={field.key}
                      extra={
                        <CloseOutlined
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      }
                    >
                      <Form.Item label="Name" name={[field.name, "name"]}>
                        <Input />
                      </Form.Item>
                      <Form.Item label="Description">
                        <Form.List name={[field.name, "descriptions"]}>
                          {(subFields, subOpt) => (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: 16,
                              }}
                            >
                              {subFields.map((subField) => (
                                <Space key={subField.key}>
                                  <Form.Item
                                    noStyle
                                    name={[subField.name, "description"]}
                                  >
                                    <Input />
                                  </Form.Item>
                                  <CloseOutlined
                                    onClick={() => {
                                      subOpt.remove(subField.name);
                                    }}
                                  />
                                </Space>
                              ))}
                              <Button
                                type="dashed"
                                onClick={() => subOpt.add()}
                                block
                              >
                                + Add Sub Item
                              </Button>
                            </div>
                          )}
                        </Form.List>
                      </Form.Item>
                    </Card>
                  ))}
                  <Button type="dashed" onClick={() => add()} block>
                    + Add Task
                  </Button>
                </div>
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
