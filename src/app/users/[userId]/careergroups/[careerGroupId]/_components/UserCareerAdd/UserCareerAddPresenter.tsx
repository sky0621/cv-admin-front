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
  Select,
  Space,
} from "antd";
import Title from "antd/es/typography/Title";
import styles from "./styles.module.css";
import { useUserCareerAdd } from "./useUserCareerAdd";
import { Skill } from "@/lib/api";

type Props = {
  userId: number;
  careerGroupId: number;
  skills: Skill[];
};

const UserCareerAddPresenter = ({ userId, careerGroupId, skills }: Props) => {
  const {
    isShowModal,
    openModal,
    closeModal,
    addUserCareer,
    contextHolder,
    selectSkills,
  } = useUserCareerAdd(userId, careerGroupId, skills);
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
          width={900}
        >
          <Title level={3}>Add UserCareer Form</Title>
          <Form onFinish={addUserCareer}>
            <Row>
              <Col span={7}>From</Col>
              <Col span={6}>To</Col>
            </Row>
            <Row>
              <Col span={3}>
                <Form.Item name="fromYear" rules={[{ required: true }]}>
                  <InputNumber placeholder="year" />
                </Form.Item>
              </Col>
              <Col span={1}>/</Col>
              <Col span={2}>
                <Form.Item name="fromMonth" rules={[{ required: true }]}>
                  <InputNumber placeholder="month" />
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={3}>
                <Form.Item name="toYear" rules={[{ required: true }]}>
                  <InputNumber placeholder="year" />
                </Form.Item>
              </Col>
              <Col span={1}>/</Col>
              <Col span={2}>
                <Form.Item name="toMonth" rules={[{ required: true }]}>
                  <InputNumber placeholder="month" />
                </Form.Item>
              </Col>
            </Row>
            <div>Name</div>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input style={{ width: "95%" }} />
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
                        <Input style={{ width: "95%" }} />
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
            <div>Task</div>
            <Form.List name="tasks">
              {(fields, { add, remove }) => (
                <div
                  style={{
                    display: "flex",
                    rowGap: 16,
                    flexDirection: "column",
                    marginBottom: "24px",
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
                      <div>Name</div>
                      <Form.Item name={[field.name, "name"]}>
                        <Input />
                      </Form.Item>
                      <div>Description</div>
                      <Form.Item>
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
                                    <Input style={{ width: "800px" }} />
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
                                + Add Description
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
            <div>Skill</div>
            <Form.List name="skillGroups">
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
                      title={`SkillGroup ${field.name + 1}`}
                      key={field.key}
                      extra={
                        <CloseOutlined
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      }
                    >
                      <div>Label</div>
                      <Form.Item name={[field.name, "label"]}>
                        <Input />
                      </Form.Item>
                      <div>Skill</div>
                      <Form.Item>
                        <Form.List name={[field.name, "skills"]}>
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
                                    name={[subField.name, "version"]}
                                  >
                                    <Input placeholder="version" />
                                  </Form.Item>
                                  <Form.Item>
                                    <Select
                                      options={selectSkills}
                                      showSearch
                                      placeholder="skill"
                                    />
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
                                + Add Skill
                              </Button>
                            </div>
                          )}
                        </Form.List>
                      </Form.Item>
                    </Card>
                  ))}
                  <Button type="dashed" onClick={() => add()} block>
                    + Add Skill Group
                  </Button>
                </div>
              )}
            </Form.List>
            <Form.Item style={{ marginTop: "24px" }}>
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
