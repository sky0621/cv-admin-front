import { useState } from "react";
import { z } from "zod";
import { message } from "antd";
import { addUserCareerServerAction } from "@/app/users/[userId]/careergroups/[careerGroupId]/_components/UserCareerGroupEdit/_components/UserCareerList/_components/UserCareerAdd/action";

export const useUserCareerAdd = (userId: number, careerGroupId: number) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const addUserCareer = async (values: any) => {
    const addUserGroupForm: AddUserCareerForm =
      AddUserCareerFormSchema.parse(values);

    try {
      const res = await addUserCareerServerAction(userId, careerGroupId, {
        name: addUserGroupForm.name,
        description: addUserGroupForm.description,
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
  };
};

const AddUserCareerFormSchema = z.object({
  name: z.string(),
  description: z.array(z.string()),
  fromYear: z.number(),
  fromMonth: z.number(),
  toYear: z.number(),
  toMonth: z.number(),
});

type AddUserCareerForm = z.infer<typeof AddUserCareerFormSchema>;
