import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MovieCard = ({element}) => {
  return (
    
    <div class="shadow-md lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link href={`/singlemovie/${element.summary.id}`} class="block relative h-48 rounded overflow-hidden">
      <Image width={500} height={800} alt="ecommerce" class="object-center object-contain " src={element.jawSummary.backgroundImage.url}/>
    </Link>
    <div class="mt-4">
      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{element.summary.type}</h3>
      <h2 class="text-gray-900 title-font text-lg font-medium">{element.jawSummary.title}</h2>
      <p class="mt-1">{element.jawSummary.synopsis.substr(0, 50)}</p>
      <p class="mt-1 text-red-700">{element.jawSummary.releaseYear}</p>
    </div>
  </div>
  )
}

export default MovieCard
