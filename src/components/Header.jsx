import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='relative h-screen md:min-h-[90vh] pt-24 '>
      <div className='bg-[url("/bg.jpg")] bg-cover bg-bottom absolute z-10 top-0 left-0 w-full h-full '>
      </div>
      <div className='absolute z-20 w-full h-full bottom-0 bg-gradient-to-tr from-black to-transparent ' />
      <div className='relative z-30 grid grid-cols-1 lg:grid-cols-12 '>
        <div className="col-span-1 lg:col-span-8 py-20 px-8 lg:py-32 lg:px-12">
          <div className="flex pb-8 leading-relaxed flex-col w-full  item-center justify-center gap-3 text-zinc-100">
            <h1 className='text-md lg:text-xl'>Multicreation Company</h1>
            <h3 className="text-3xl lg:text-5xl bg-gradient-to-tr tracking-widest from-red-600 to-orange-500 bg-clip-text text-transparent font-extrabold uppercase">inspiring partner</h3>
            <p className='w-full lg:w-[60%] leading-relaxed text-sm lg:text-md '>Aplus Multicreation are a creative agency in the marketing sphere that focuses on Event, Production and Branding.</p>
          </div>
          <button className='px-6 py-2 bg-gradient-to-tr from-red-600 to-orange-500 text-zinc-200 text-md'>
            <Link href="/about">Read More</Link>
          </button>
        </div>
        <div className="col-span-1 lg:col-span-4 text-white flex flex-row lg:flex-col items-center justify-center">
          <h3>sosmed</h3>
        </div>
      </div>
    </div>
  )
}

export default Header