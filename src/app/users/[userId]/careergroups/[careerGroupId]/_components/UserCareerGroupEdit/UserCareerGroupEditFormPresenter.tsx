"use client";

import { UserCareerGroup } from "@/lib/api";
import { Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import { useUserCareerGroupEditForm } from "./useUserCareerGroupEditForm";

type Props = {
  careerGroup: UserCareerGroup;
};

const UserCareerGroupEditFormPresenter = ({ careerGroup }: Props) => {
  const { editUserCareerGroup } = useUserCareerGroupEditForm(careerGroup);
  return (
    <>
      <Title level={3}>CareerGroup</Title>
      <Form onFinish={editUserCareerGroup}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true }]}
          initialValue={careerGroup.label}
        >
          <Input placeholder="Name" />
        </Form.Item>
      </Form>
    </>
  );
};

export default UserCareerGroupEditFormPresenter;
