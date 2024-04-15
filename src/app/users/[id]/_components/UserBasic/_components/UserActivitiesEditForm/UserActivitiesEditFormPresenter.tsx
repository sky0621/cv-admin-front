"use client";

import { UserActivity } from "@/lib/api";
import { Form } from "antd";
import Title from "antd/es/typography/Title";
import { useUserActivitiesEditForm } from "@/app/users/[id]/_components/UserBasic/_components/UserActivitiesEditForm/useUserActivitiesEditForm";

type Props = {
  activities: UserActivity[];
};

const UserActivitiesEditFormPresenter = ({ activities }: Props) => {
  const { editUserActivities } = useUserActivitiesEditForm(activities);
  return (
    <>
      <Title level={3}>Activities</Title>
      <Form onFinish={editUserActivities}>
        {activities.map((activity, idx) => (
          <div key={idx}>
            <div>{activity.name}</div>
            <div>{activity.url}</div>
            <div>{activity.icon}</div>
          </div>
        ))}
      </Form>
    </>
  );
};

export default UserActivitiesEditFormPresenter;
