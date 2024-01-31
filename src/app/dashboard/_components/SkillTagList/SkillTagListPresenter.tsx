"use client";

import { SkillTag } from "@/lib/api";
import Title from "antd/es/typography/Title";
import { Table, TableProps } from "antd";
import Link from "next/link";

const columns: TableProps<SkillTag>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (id) => <Link href={`/skilltags/${id}`}>{id}</Link>,
  },
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
  },
];

type Props = {
  skillTags: SkillTag[];
};

const SkillTagListPresenter = ({ skillTags }: Props) => {
  return (
    <>
      <Title level={3}>SkillTagList</Title>
      <Table dataSource={skillTags} columns={columns} />
    </>
  );
};

export default SkillTagListPresenter;
