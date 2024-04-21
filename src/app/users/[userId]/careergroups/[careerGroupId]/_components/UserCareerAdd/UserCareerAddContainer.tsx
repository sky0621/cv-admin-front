import UserCareerAddPresenter from "./UserCareerAddPresenter";
import { getSkills } from "@/feature/skill";

type Props = {
  userId: number;
  careerGroupId: number;
};

const UserCareerAddContainer = async ({ userId, careerGroupId }: Props) => {
  const skills = await getSkills();
  return (
    <UserCareerAddPresenter
      userId={userId}
      careerGroupId={careerGroupId}
      skills={skills}
    />
  );
};

export default UserCareerAddContainer;
