import { Configuration, UsersApi } from "@/_lib/api";
import Link from "next/link";

export default async function Users3Page({
  params,
}: {
  params: { id: string };
}) {
  await (() => {
    setTimeout(() => {
      console.log("user3");
    }, 1000);
  })();
  console.log(params.id);
  const { API_URL } = process.env;
  console.log(API_URL);
  const config = new Configuration({ basePath: API_URL });
  const api = new UsersApi(config);
  const res = await api.usersByUserIdActivitiesGet({
    byUserId: Number(params.id),
  });

  return (
    <>
      {res.map((r) => {
        return (
          <div>
            <div>{r.name}</div>
          </div>
        );
      })}
      <div>&nbsp;</div>
      <div>
        <Link href="/">To Home</Link>
      </div>
    </>
  );
}
