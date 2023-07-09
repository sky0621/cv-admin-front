import { ReactNode } from "react";

type Props = {
  header: ReactNode;
  children: ReactNode;
};

const UsersLayout = (props: Props) => {
  return (
    <div>
      <div>{props.header}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default UsersLayout;
