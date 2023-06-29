import Link from "next/link";

export default function PhotoPage() {
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
