"use client";

import { UserAttribute } from "@/lib/api";
import Title from "antd/es/typography/Title";
import { Table, TableProps } from "antd";
import Link from "next/link";
import { useUserList } from "./useUserList";

type ColumnType = Omit<UserAttribute, "avatarUrl" | "pr">;

const columns: TableProps<ColumnType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (id) => <Link href={`/users/${id}`}>{id}</Link>,
  },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "NickName", dataIndex: "nickname", key: "nickname" },
  {
    title: "Birthday",
    dataIndex: "birthday",
    key: "birthday",
    render: (birthday) =>
      `${birthday.year}年${birthday.month}月${birthday.day}日`,
  },
  { title: "Job", dataIndex: "job", key: "job" },
  { title: "BelongTo", dataIndex: "belongTo", key: "belongTo" },
];

type Props = {
  users: UserAttribute[];
};

const UserListPresenter = ({ users }: Props) => {
  const { userAttributeWithKeys } = useUserList(users);
  return (
    <>
      <Title level={3}>UserList</Title>
      <Table dataSource={userAttributeWithKeys} columns={columns} />
    </>
  );
};

export default UserListPresenter;
