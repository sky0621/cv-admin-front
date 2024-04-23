import { useEffect, useState } from "react";
import { z } from "zod";
import { message } from "antd";
import { addUserCareerServerAction } from "./action";
import { Skill } from "@/lib/api";

export const useUserCareerAdd = (
  userId: number,
  careerGroupId: number,
  skills: Skill[],
) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [selectSkills, setSelectSkills] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);
  const [selectedSkill, setSelectedSkill] = useState<number>(0);

  useEffect(() => {
    if (skills) {
      setSelectSkills(
        skills
          .filter((skill) => skill.name !== undefined && skill.id !== undefined)
          .map((skill) => ({
            label: skill.name!!,
            value: String(skill.id!!),
          })),
      );
    }
  }, [skills]);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const changedSkillSelect = (value: string) => {
    setSelectedSkill(Number(value));
  };

  const filterSkillOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const addUserCareer = async (values: any) => {
    const addUserGroupForm: AddUserCareerForm =
      AddUserCareerFormSchema.parse(values);

    try {
      const res = await addUserCareerServerAction(userId, careerGroupId, {
        name: addUserGroupForm.name,
        description: addUserGroupForm.description,
        from: {
          year: addUserGroupForm.fromYear,
          month: addUserGroupForm.fromMonth,
        },
        to: {
          year: addUserGroupForm.toYear,
          month: addUserGroupForm.toMonth,
        },
        tasks: addUserGroupForm.tasks.map((task) => ({
          name: task.name,
          description: task.descriptions.map((t) => t.description),
        })),
        skillGroups: addUserGroupForm.skillGroups.map((skillGroup) => ({
          label: skillGroup.label,
          skills: skillGroup.skills.map((skill) => ({
            version: skill.version,
            skill: { id: Number(skill.skillId) } as Skill,
          })),
        })),
      });
      messageApi.open({
        type: "success",
        content: "id:" + res.id + " is created",
      });
      closeModal();
    } catch (e: unknown) {
      console.error(e);
      const msg = e instanceof Error ? e.message : String(e);
      messageApi.open({
        type: "error",
        content: "error is " + msg,
      });
      throw e;
    }
  };

  return {
    isShowModal,
    openModal,
    closeModal,
    addUserCareer,
    contextHolder,
    selectSkills,
    changedSkillSelect,
    filterSkillOption,
  };
};

const AddUserCareerFormTaskDescriptionSchema = z.object({
  description: z.string(),
});

const AddUserCareerFormTaskSchema = z.object({
  name: z.string(),
  descriptions: z.array(AddUserCareerFormTaskDescriptionSchema),
});

const AddUserCareerFormSkillSchema = z.object({
  skillId: z.string(),
  version: z.string(),
});

const AddUserCareerFormSkillGroupSchema = z.object({
  label: z.string(),
  skills: z.array(AddUserCareerFormSkillSchema),
});

const AddUserCareerFormSchema = z.object({
  name: z.string(),
  description: z.array(z.string()),
  fromYear: z.number(),
  fromMonth: z.number(),
  toYear: z.number(),
  toMonth: z.number(),
  tasks: z.array(AddUserCareerFormTaskSchema),
  skillGroups: z.array(AddUserCareerFormSkillGroupSchema),
});

type AddUserCareerForm = z.infer<typeof AddUserCareerFormSchema>;
