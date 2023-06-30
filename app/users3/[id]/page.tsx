import { Configuration, UsersApi } from "@/lib/api";

export default async function Users3Page({
  params,
}: {
  params: { id: string };
}) {
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
    </>
  );
}
