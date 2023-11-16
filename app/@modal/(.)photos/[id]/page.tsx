import Frame from "@/app/ui/frame/Frame";
import Modal from "@/app/ui/modal/Modal";
import photos, { Photo } from "@/app/lib/photos";

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  const photo: Photo = photos.find((p) => p.id === photoId)!

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  )
}
