import { useEffect, useState } from "react";
import { z } from "zod";
import { message, SelectProps } from "antd";
import { addUserCareerServerAction } from "./action";
import { Skill } from "@/lib/api";

export const useUserCareerAdd = (
  userId: number,
  careerGroupId: number,
  skills: Skill[],
) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [selectSkills, setSelectSkills] = useState<SelectProps["options"]>();

  useEffect(() => {
    if (skills) {
      setSelectSkills(
        skills.map((skill) => ({
          label: skill.name,
          value: skill.id,
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

  const addUserCareer = async (values: any) => {
    console.info(values);
    const addUserGroupForm: AddUserCareerForm =
      AddUserCareerFormSchema.parse(values);
    console.info(addUserGroupForm);

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
  };
};

const AddUserCareerFormTaskDescriptionSchema = z.object({
  description: z.string(),
});

const AddUserCareerFormTaskSchema = z.object({
  name: z.string(),
  descriptions: z.array(AddUserCareerFormTaskDescriptionSchema),
});

const AddUserCareerFormSchema = z.object({
  name: z.string(),
  description: z.array(z.string()),
  fromYear: z.number(),
  fromMonth: z.number(),
  toYear: z.number(),
  toMonth: z.number(),
  tasks: z.array(AddUserCareerFormTaskSchema),
});

type AddUserCareerForm = z.infer<typeof AddUserCareerFormSchema>;
