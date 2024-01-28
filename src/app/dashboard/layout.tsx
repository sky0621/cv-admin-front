import AppLayout from "@/app/dashboard/_components/AppLayout/AppLayout";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return <AppLayout>{children}</AppLayout>;
};

export default DashboardLayout;
