"use client";

import { UserQualification } from "@/lib/api";
import { Form } from "antd";
import Title from "antd/es/typography/Title";
import { useUserQualificationsEditForm } from "@/app/users/[id]/_components/UserEditForm/_components/UserQualificationsEditForm/useUserQualificationsEditForm";

type Props = {
  qualifications: UserQualification[];
};

const UserQualificationsEditFormPresenter = ({ qualifications }: Props) => {
  const { editUserQualifications } =
    useUserQualificationsEditForm(qualifications);
  return (
    <>
      <Title level={3}>Qualification</Title>
      <Form onFinish={editUserQualifications}>
        {qualifications.map((qualification, idx) => (
          <div key={idx}>
            <div>{qualification.name}</div>
            <div>{qualification.organization}</div>
            <div>{qualification.url}</div>
            <div>{qualification.gotDate?.toUTCString()}</div>
            <div>{qualification.memo}</div>
          </div>
        ))}
      </Form>
    </>
  );
};

export default UserQualificationsEditFormPresenter;
