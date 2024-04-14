"use client";

import { UserAttribute } from "@/lib/api";
import { Form, Input } from "antd";
import { useUserAttributeEditForm } from "@/app/users/[id]/_components/UserEditForm/_components/UserAttributeEditForm/useUserAttributeEditForm";
import Title from "antd/es/typography/Title";

type Props = {
  attribute: UserAttribute;
};

const UserAttributeEditFormPresenter = ({ attribute }: Props) => {
  const { editUserAttribute } = useUserAttributeEditForm(attribute);
  return (
    <>
      <Title level={3}>Attribute</Title>
      <Form onFinish={editUserAttribute}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true }]}
          initialValue={attribute.name}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Nickname"
          name="nickname"
          rules={[{ required: true }]}
          initialValue={attribute.nickname}
        >
          <Input placeholder="Nickname" />
        </Form.Item>
      </Form>
    </>
  );
};

export default UserAttributeEditFormPresenter;
