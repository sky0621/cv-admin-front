import UsersSelect, {
  HandleUsersSelectChange,
  UsersSelectOption,
} from "@/components/client/UsersSelect";
import HeaderComponent from "@/components/client/Header";

const HeaderPage = () => {
  const defaultValue = "-";

  const options: UsersSelectOption[] = [
    { value: "1", label: "User01" },
    { value: "2", label: "User02" },
    { value: "3", label: "User03" },
  ];

  const handleChange: HandleUsersSelectChange = (v: string) => {
    console.log(v);
  };

  return (
    <HeaderComponent>
      <UsersSelect
        defaultValue={defaultValue}
        options={options}
        //        handleChange={handleChange}
      />
    </HeaderComponent>
  );
};

export default HeaderPage;
