"use client";

import { CareerPeriodFrom, UserCareer } from "@/lib/api";
import Title from "antd/es/typography/Title";
import { Table, TableProps } from "antd";
import Link from "next/link";
import { useUserCareerList } from "./useUserCareerList";
import { toYM } from "./util";

type ColumnType = Omit<UserCareer, "careers">;

type Props = {
  userId: number;
  careerGroupId: number;
  careers: UserCareer[] | undefined;
};

const UserCareerListPresenter = ({ userId, careerGroupId, careers }: Props) => {
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
    {
      title: "From",
      dataIndex: "from",
      key: "from",
      sorter: (a, b) =>
        toYM(a.from?.year ?? 0, a.from?.month ?? 0) -
        toYM(b.from?.year ?? 0, b.from?.month ?? 0),
      sortDirections: ["ascend", "descend"],
      defaultSortOrder: "descend",
      render: (from: CareerPeriodFrom) => (
        <div>
          {from.year}/{from.month}
        </div>
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
