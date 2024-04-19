"use client";

import { UserCareer } from "@/lib/api";
import Title from "antd/es/typography/Title";
import { Table, TableProps } from "antd";
import Link from "next/link";
import { useUserCareerList } from "./useUserCareerList";

type ColumnType = Omit<UserCareer, "careers">;

type Props = {
  userId: number;
  careerGroupId: number;
  careers: UserCareer[] | undefined;
};

const UserCareerListPresenter = ({ userId, careerGroupId, careers }: Props) => {
  if (!careers) return null;
  const { userCareerWithKeys } = useUserCareerList(careers);

  const columns: TableProps<ColumnType>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Link
          href={`/users/${userId}/careergroups/${careerGroupId}/careers/${id}`}
        >
          {id}
        </Link>
      ),
    },
    { title: "Name", dataIndex: "name", key: "name" },
  ];

  return (
    <>
      <Title level={3}>UserCareerList</Title>
      <Table dataSource={userCareerWithKeys} columns={columns} />
    </>
  );
};

export default UserCareerListPresenter;
