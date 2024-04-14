import { useState } from "react";
import { z } from "zod";
import { addSkillServerAction } from "@/app/skilltags/[id]/_components/SkillAdd/action";

export const useSkillAdd = (skillTagId: number) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const addSkill = async (values: any) => {
    const addSkillForm: AddSkillForm = AddSkillFormSchema.parse(values);
    console.info(addSkillForm);
    console.info(skillTagId);
    try {
      const res = addSkillServerAction({
        name: addSkillForm.name,
        url: addSkillForm.url,
        tagId: skillTagId,
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return { isShowModal, openModal, closeModal, addSkill };
};

const AddSkillFormSchema = z.object({
  name: z.string(),
  url: z.string().optional(),
});

type AddSkillForm = z.infer<typeof AddSkillFormSchema>;
