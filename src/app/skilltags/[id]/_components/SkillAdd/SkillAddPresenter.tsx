"use client";

import { useSkillAdd } from "@/app/skilltags/[id]/_components/SkillAdd/useSkillAdd";
import { PlusCircleOutlined } from "@ant-design/icons";

type Props = {
  addSkill: () => void;
};

const SkillAddPresenter = () => {
  useSkillAdd();
  const add = () => {
    alert("add");
  };
  return (
    <PlusCircleOutlined
      style={{ fontSize: "48px", color: "purple" }}
      onClick={add}
    />
  );
};

export default SkillAddPresenter;
