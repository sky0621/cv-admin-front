import { useState } from "react";
import { z } from "zod";
import { message } from "antd";
import { addUserGroupServerAction } from "./action";

export const useUserCareerGroupAdd = (userId: number) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const addUserCareerGroup = async (values: any) => {
    const addUserGroupForm: AddUserGroupForm =
      AddUserGroupFormSchema.parse(values);

    try {
      const res = await addUserGroupServerAction(userId, {
        label: addUserGroupForm.label,
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
    addUserCareerGroup,
    contextHolder,
  };
};

const AddUserGroupFormSchema = z.object({
  label: z.string(),
});

type AddUserGroupForm = z.infer<typeof AddUserGroupFormSchema>;
