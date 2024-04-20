"use client";

import { UserCareerGroup } from "@/lib/api";
import Title from "antd/es/typography/Title";
import { Table, TableProps } from "antd";
import Link from "next/link";
import { useUserCareerGroupList } from "./useUserCareerGroupList";
import { UserCareerGroupAdd } from "./_components/UserCareerGroupAdd";

type ColumnType = Omit<UserCareerGroup, "careers">;

type Props = {
  userId: number;
  careerGroups: UserCareerGroup[];
};

const UserCareerGroupListPresenter = ({ userId, careerGroups }: Props) => {
  const { userCareerGroupWithKeys } = useUserCareerGroupList(careerGroups);

  const columns: TableProps<ColumnType>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Link href={`/users/${userId}/careergroups/${id}`}>{id}</Link>
      ),
    },
    { title: "Label", dataIndex: "label", key: "label" },
  ];

  return (
    <>
      <Title level={3}>UserCareerGroupList</Title>
      <UserCareerGroupAdd userId={userId} />
      <Table dataSource={userCareerGroupWithKeys} columns={columns} />
    </>
  );
};

export default UserCareerGroupListPresenter;
