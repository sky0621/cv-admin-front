import UserSelectClientComponent, {
  HandleUsersSelectChange,
  UsersSelectOption,
} from "@/components/userselect/UserSelectClientComponent";
import { UsersApi } from "@/lib/api";
import { Suspense } from "react";

const UserSelectFallback = () => {
  return <>--- Fallback ---</>;
};

const UserSelectContainer = async () => {
  const defaultValue = "0";

  const users = await new UsersApi().usersGet();
  const options: UsersSelectOption[] = users.map((user, idx) => ({
    value: String(idx),
    label: user.name ?? "--------",
  }));

  const handleChange: HandleUsersSelectChange = (v: string) => {
    console.log(v);
  };

  return (
    <Suspense fallback={<UserSelectFallback />}>
      <UserSelectClientComponent
        defaultValue={defaultValue}
        options={options}
        handleChange={handleChange}
      />
    </Suspense>
  );
};

export default UserSelectContainer;
