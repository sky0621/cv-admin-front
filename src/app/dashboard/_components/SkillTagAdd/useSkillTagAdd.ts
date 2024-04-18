import { useState } from "react";
import { z } from "zod";
import { message } from "antd";
import { addSkillTagServerAction } from "./action";

export const useSkillTagAdd = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const addSkillTag = async (values: any) => {
    const addSkillTagForm: AddSkillTagForm =
      AddSkillTagFormSchema.parse(values);

    try {
      const res = await addSkillTagServerAction({
        name: addSkillTagForm.name,
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
    addSkillTag,
    contextHolder,
  };
};

const AddSkillTagFormSchema = z.object({
  name: z.string(),
});

type AddSkillTagForm = z.infer<typeof AddSkillTagFormSchema>;
