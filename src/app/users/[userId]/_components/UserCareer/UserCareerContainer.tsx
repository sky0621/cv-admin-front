import { UserCareerGroupAdd } from "./_components/UserCareerGroupAdd";
import { UserCareerGroupList } from "./_components/UserCareerGroupList";

type Props = {
  userId: number;
};

const UserCareerContainer = async ({ userId }: Props) => {
  return (
    <>
      <UserCareerGroupAdd userId={userId} />
      <UserCareerGroupList userId={userId} />
    </>
  );
};

export default UserCareerContainer;
