import SideMenuClientComponent from "@/components/sidemenu/SideMenuClientComponent";
import { Suspense } from "react";

const SideMenuFallback = () => {
  return <>--- Fallback ---</>;
};

const SideMenuContainer = async () => {
  return (
    <Suspense fallback={<SideMenuFallback />}>
      <SideMenuClientComponent />
    </Suspense>
  );
};

export default SideMenuContainer;
