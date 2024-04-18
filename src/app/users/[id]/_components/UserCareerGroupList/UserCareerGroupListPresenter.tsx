"use client";

import { UserCareerGroup } from "@/lib/api";
import Title from "antd/es/typography/Title";
import { Table, TableProps } from "antd";
import Link from "next/link";
import { useUserCareerGroupList } from "./useUserCareerGroupList";

type ColumnType = Omit<UserCareerGroup, "careers">;

const columns: TableProps<ColumnType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (id) => <Link href={`/users/${id}`}>{id}</Link>,
  },
  { title: "Label", dataIndex: "label", key: "label" },
];

type Props = {
  careerGroups: UserCareerGroup[];
};

const UserCareerGroupListPresenter = ({ careerGroups }: Props) => {
  const { userCareerGroupWithKeys } = useUserCareerGroupList(careerGroups);
  return (
    <>
      <Title level={3}>UserCareerGroupList</Title>
      <Table dataSource={userCareerGroupWithKeys} columns={columns} />
    </>
  );
};

export default UserCareerGroupListPresenter;
