import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='m-auto font-ubuntu flex justify-evenly items-center bg-red-900 w-full'>
        <div className="left py-2">
            <Link href={"/"}><Image src="/logo.png" width={70} height={70} alt="3k flix logo..." priority={true}/></Link>
        </div>
        <div className="right">
            <ul className='flex space-x-7 '>
                <li><Link className='text-xl text-white hover:text-red-100' href="/">Home</Link></li>
                <li><Link className='text-xl text-white hover:text-red-100' href="/contact">Contact</Link></li>
                <li><Link className='text-xl text-white hover:text-red-100' href="/movies">Movies</Link></li>
                <li><Link className='text-xl text-white hover:text-red-100' href="/about">About</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar