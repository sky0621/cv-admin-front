import Modal from "@/components/modal/Modal";

export default function PhotoModal() {
  return (
    <Modal>
      <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto border border-gray-700">
          <img src="https://placehold.jp/320x320.png" alt="" />
        </div>
      </div>
    </Modal>
  );
}
