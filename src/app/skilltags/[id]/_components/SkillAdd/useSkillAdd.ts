import { useState } from "react";
import { z } from "zod";

export const useSkillAdd = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const addSkill = async (values: any) => {
    console.info(values);
    const addSkillForm: AddSkillForm = AddSkillFormSchema.parse(values);
    console.info(addSkillForm);
  };

  return { isShowModal, openModal, closeModal, addSkill };
};

const AddSkillFormSchema = z.object({
  name: z.string(),
  code: z.string(),
  url: z.string().optional().nullable(),
});

type AddSkillForm = z.infer<typeof AddSkillFormSchema>;
