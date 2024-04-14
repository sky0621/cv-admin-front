"use client";

import { SkillTag } from "@/lib/api";
import Title from "antd/es/typography/Title";
import { Table, TableProps } from "antd";
import Link from "next/link";
import { useSkillTagList } from "@/app/dashboard/_components/SkillTagList/useSkillTagList";

const columns: TableProps<SkillTag>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => (a.id ?? 0) - (b.id ?? 0),
    sortDirections: ["ascend", "descend"],
    render: (id) => <Link href={`/skilltags/${id}`}>{id}</Link>,
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
];

type Props = {
  skillTags: SkillTag[];
};

const SkillTagListPresenter = ({ skillTags }: Props) => {
  console.info(skillTags);
  const { skillTagWithKeys } = useSkillTagList(skillTags);
  return (
    <>
      <Title level={3}>SkillTagList</Title>
      <Table dataSource={skillTagWithKeys} columns={columns} />
    </>
  );
};

export default SkillTagListPresenter;
