"use client";

import { UserCareerGroup } from "@/lib/api";
import { Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import { useUserCareerGroupEditForm } from "./useUserCareerGroupEditForm";
import { UserCareerList } from "@/app/users/[userId]/careergroups/[careerGroupId]/_components/UserCareerGroupEdit/_components/UserCareerList";

type Props = {
  userId: number;
  careerGroupId: number;
  careerGroup: UserCareerGroup;
};

const UserCareerGroupEditFormPresenter = ({
  userId,
  careerGroupId,
  careerGroup,
}: Props) => {
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
      <UserCareerList
        userId={userId}
        careerGroupId={careerGroupId}
        careers={careerGroup.careers}
      />
    </>
  );
};

export default UserCareerGroupEditFormPresenter;
