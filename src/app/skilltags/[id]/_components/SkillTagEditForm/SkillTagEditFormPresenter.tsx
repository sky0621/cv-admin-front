"use client";

import { SkillTag } from "@/lib/api";

type Props = {
  skillTag: SkillTag;
};

const SkillTagEditFormPresenter = ({ skillTag }: Props) => {
  return (
    <>
      <div>form</div>
      <div>{skillTag.id}</div>
      <div>{skillTag.name}</div>
    </>
  );
};

export default SkillTagEditFormPresenter;
