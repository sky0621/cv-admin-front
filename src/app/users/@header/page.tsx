"use client";

import UsersSelect, {
  HandleUsersSelectChange,
  UsersSelectOption,
} from "@/components/UsersSelect";

const HeaderPage = () => {
  const defaultValue = "-";

  const options: UsersSelectOption[] = [{ value: "a", label: "A" }];

  const handleChange: HandleUsersSelectChange = (v: string) => {
    console.log(v);
  };

  return (
    <UsersSelect
      defaultValue={defaultValue}
      options={options}
      //      handleChange={handleChange}
    />
  );
};

export default HeaderPage;
