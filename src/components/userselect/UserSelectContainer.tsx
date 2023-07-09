import UserSelectClientComponent, {
  HandleUsersSelectChange,
  UsersSelectOption,
} from "@/components/userselect/UserSelectClientComponent";
import { UsersApi } from "@/lib/api";

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
    <UserSelectClientComponent
      defaultValue={defaultValue}
      options={options}
      handleChange={handleChange}
    />
  );
};

export default UserSelectContainer;
