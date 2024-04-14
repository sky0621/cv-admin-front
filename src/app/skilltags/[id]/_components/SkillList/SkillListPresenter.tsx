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
    sorter: (a, b) => (a.id ?? 0) - (b.id ?? 0),
    sortDirections: ["ascend", "descend"],
    render: (id) => <Link href={`/skills/${id}`}>{id}</Link>,
    width: "120px",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => ((a.name ?? "") < (b.name ?? "") ? -1 : 1),
    sortDirections: ["ascend", "descend"],
    defaultSortOrder: "ascend",
  },
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
