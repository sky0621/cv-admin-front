"use client";

import { Skill } from "@/lib/api";
import { Table, TableProps } from "antd";
import Link from "next/link";
import { useSkillList } from "@/app/skilltags/[id]/_components/SkillList/useSkillPresenter";

const columns: TableProps<Skill>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (id) => <Link href={`/skills/${id}`}>{id}</Link>,
  },
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "URL",
    dataIndex: "url",
    key: "url",
  },
];

type Props = {
  skills: Skill[];
};

const SkillListPresenter = ({ skills }: Props) => {
  const { skillWithKeys } = useSkillList(skills);
  return <Table dataSource={skillWithKeys} columns={columns} />;
};

export default SkillListPresenter;
