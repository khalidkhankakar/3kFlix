'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

const Searchbar = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => { 
    e.preventDefault();
    router.push(`/search/${search}`)
   }

  return (
    <div>
          <div class="flex flex-col p-2 py-2 m-h-screen">
            <form onSubmit={handleSubmit} class="bg-red-400 items-center justify-between w-1/2 m-auto flex rounded-full shadow-lg p-2 mb-1 sticky ">
                <div>
                    <div class="p-2 mr-1 rounded-full hover:bg-red-100 cursor-pointer">
                        <svg class="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <input onChange={(e)=> setSearch(e.target.value)} value={search} class="font-bold rounded-full w-full py-4 pl-4 text-red-700 bg-red-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search fav movie/series...."/>

                    <button onClick={handleSubmit} type='submit' class="bg-red-600 p-2 hover:bg-red-700 cursor-pointer mx-2 rounded-full">
                        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
    
                    </button>
    
            </form> 
          </div>
      </div>
  )
}

export default Searchbar