import "server-only";

export async function getData() {
  const res = await fetch("", {
    headers: {
      authorization: process.env.API_KEY,
    },
  });
  return res.json();
}
