import photos, { Photo } from "@/app/lib/photos";
import Frame from "@/app/ui/frame/Frame";

export default function Photo({ params: { id }}: { params: { id: string }}){
  const photo: Photo = photos.find(p => p.id === id)!

  console.log(photo)
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame photo={photo} />
      </div>
    </div>
  )
}
