"use client";

import { SkillTag } from "@/lib/api";

type Props = {
  skillTag: SkillTag;
};

const SkillTagEditFormPresenter = ({ skillTag }: Props) => {
  console.info(skillTag);

  return (
    <>
      <div>form</div>
      <div>{skillTag.id}</div>
      <div>{skillTag.name}</div>
      <div>{skillTag.code}</div>
    </>
  );
};

export default SkillTagEditFormPresenter;
