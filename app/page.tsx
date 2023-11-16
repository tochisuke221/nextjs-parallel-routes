import Frame from './ui/frame/Frame'
import photos, { Photo } from './lib/photos'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className='text-center text-4xl font-bold m-10'>Next.js ParallelRoutes & Intercepting Routes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max gap-6 m-10">
          {photos.map((photo) => (
            <Link key={photo.id} href={`/photos/${photo.id}`}>
              <Image
                alt=""
                src={photo.imageSrc}
                height={500}
                width={500}
                className='w-full object-cover aspect-square'
              />
            </Link>
          ))}
        </div>
    </main>
  )
}
