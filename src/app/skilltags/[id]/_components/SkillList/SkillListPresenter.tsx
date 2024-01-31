"use client";

import { Skill } from "@/lib/api";
import Title from "antd/es/typography/Title";
import { Table, TableProps } from "antd";
import Link from "next/link";
import { useSkillList } from "@/app/skilltags/[id]/_components/SkillList/useSkillList";

type ColumnType = Omit<Skill, "url">;

const columns: TableProps<ColumnType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (id) => <Link href={`/skill/${id}`}>{id}</Link>,
  },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Key", dataIndex: "key", key: "key" },
];

type Props = {
  skills: Skill[];
};

const SkillListPresenter = ({ skills }: Props) => {
  const { userAttributeWithKeys } = useSkillList(skills);
  return (
    <>
      <Title level={3}>SkillList</Title>
      <Table dataSource={skills} columns={columns} />
    </>
  );
};

export default SkillListPresenter;
