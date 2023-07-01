import Link from "next/link";

export default async function PhotoPage() {
  await (() => {
    setTimeout(() => {
      console.log("photo");
    }, 2000);
  })();
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto border border-gray-700">
          <img src="https://placehold.jp/320x320.png" alt="" />
        </div>
      </div>
      <div>
        <Link href="/">To Home</Link>
      </div>
    </>
  );
}
