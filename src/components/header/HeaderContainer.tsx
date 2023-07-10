import HeaderClientComponent from "@/components/header/HeaderClientComponent";
import { Suspense } from "react";

const HeaderFallback = () => {
  return <>--- Fallback ---</>;
};

const HeaderContainer = async () => {
  return (
    <Suspense fallback={<HeaderFallback />}>
      <HeaderClientComponent />
    </Suspense>
  );
};

export default HeaderContainer;
