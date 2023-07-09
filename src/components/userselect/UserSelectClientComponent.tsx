"use client";

import { Select } from "antd";

export type HandleUsersSelectChange = (v: string) => void;

export type UsersSelectOption = {
  value: string;
  label: string;
};

export type UsersSelectProps = {
  defaultValue: string;
  options: UsersSelectOption[];
  handleChange: HandleUsersSelectChange;
};

const UserSelectClientComponent = (props: UsersSelectProps) => {
  return (
    <Select
      defaultValue={props.defaultValue}
      options={props.options}
      onChange={props.handleChange}
    />
  );
};

export default UserSelectClientComponent;
