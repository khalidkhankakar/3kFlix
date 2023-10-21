import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<footer class="bg-red-900 text-white body-font">
  <div class="container px-5 py-[20px] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <div className="flex">
      <Link href={"/"}><Image className='text-white' src={"/logo.png"} width={50} height={50} alt="logo"/></Link>
      <Link href={"/"}><span class="ml-3 text-xl">3K-Flix</span></Link>
      </div>
      <p class="mt-2 text-sm text-white">The world most popular paltform</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">MOVIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Avengers Endgame</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Fast X</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Inception</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">The Lion King</Link>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">WEB-SERIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Vikings Valhalala</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">The Wicther</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Stranger Things</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Game of Thrones</Link>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">HELP/PRIVACY</h2>
        <nav class="list-none mb-10">
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">First Link</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Second Link</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Third Link</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">ABOUT US</h2>
        <nav class="list-none mb-10">
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Contact Us</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Managment</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Third Link</Link>
          </li>
          <li>
            <Link href={"/"} class="text-white hover:text-gray-300 cursor-pointer">Fourth Link</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>

</footer>
  )
}

export default Footer