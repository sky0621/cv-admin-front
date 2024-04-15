import { useState } from "react";
import { z } from "zod";
import { addSkillServerAction } from "@/app/skilltags/[id]/_components/SkillAdd/action";
import { message } from "antd";

export const useSkillAdd = (skillTagId: number) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const addSkill = async (values: any) => {
    const addSkillForm: AddSkillForm = AddSkillFormSchema.parse(values);
    try {
      const res = await addSkillServerAction({
        name: addSkillForm.name,
        url: addSkillForm.url,
        tagId: skillTagId,
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

  return { isShowModal, openModal, closeModal, addSkill, contextHolder };
};

const AddSkillFormSchema = z.object({
  name: z.string(),
  url: z.string().optional(),
});

type AddSkillForm = z.infer<typeof AddSkillFormSchema>;
