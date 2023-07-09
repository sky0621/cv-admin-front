import { Select } from "antd";

export type HandleUsersSelectChange = (v: string) => void;

export type UsersSelectOption = {
  value: string;
  label: string;
};

type Props = {
  defaultValue: string;
  options: UsersSelectOption[];
  handleChange?: HandleUsersSelectChange;
};

const UsersSelect = (props: Props) => {
  return (
    <Select
      defaultValue={props.defaultValue}
      options={props.options}
      //      onChange={props.handleChange}
    />
  );
};

export default UsersSelect;
