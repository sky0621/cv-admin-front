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
    render: (id) => <Link href={`/skilltags/${id}`}>{id}</Link>,
  },
  { title: "Name", dataIndex: "name", key: "name" },
];

type Props = {
  skillTags: SkillTag[];
};

const SkillTagListPresenter = ({ skillTags }: Props) => {
  const { skillTagWithKeys } = useSkillTagList(skillTags);
  return (
    <>
      <Title level={3}>SkillTagList</Title>
      <Table dataSource={skillTagWithKeys} columns={columns} />
    </>
  );
};

export default SkillTagListPresenter;
