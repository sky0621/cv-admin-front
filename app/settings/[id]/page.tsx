import GuestPage from "@/app/settings/[id]/@guest/page";
import MemberPage from "@/app/settings/[id]/@member/page";

export default function SettingPage({ params }: { params: { id: string } }) {
  console.log(params.id);
  return <>{params.id === "1" ? <GuestPage /> : <MemberPage />}</>;
}
