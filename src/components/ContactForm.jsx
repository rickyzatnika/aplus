"use client"

import { useState, useEffect, useRef } from 'react'
import { FaRegWindowClose } from "react-icons/fa"

const ContactForm = ({ openForm, setOpenForm }) => {


  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenForm(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setOpenForm]);

  return (
    <div className={`${openForm ? "w-full opacity-100" : "w-0 opacity-0"} overflow-auto max-h-screen w-0 bg-black/50 fixed right-0 origin-top-right backdrop-blur-sm  z-[99] transition-all duration-100 ease-linear `}>
      <div ref={ref} className=" px-2 transition-all duration-300 ease-linear w-[80%] lg:w-[50%] ml-auto bg-white h-full">
        <div className='relative w-full h-screen flex flex-col items-start justify-between'>
          <div className="w-full">
            <div className="relative flex item-start justify-between w-full px-4 py-6">
              <h2 className='text-2xl md:text-3xl lg:text-5xl flex flex-col gap-2 font-bold'>
                Hey! Tell us <span>all the things</span>
              </h2>
              <button className="absolute top-8 right-6 text-xl" onClick={() => setOpenForm(false)}><FaRegWindowClose className='hover:text-red-600' size={25} /></button>
            </div>
            <form className='w-full  py-4'>
              <div className='w-full px-4'>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <div className='flex-1 flex-col gap-3 items-start'>
                    <label className='font-bold'>Name & Company</label>
                    <input type="text" placeholder='john from Telkomsel' className='placeholder:text-sm placeholder:text-zinc-500 px-6 py-3 w-full outline-none border-none bg-zinc-100 focus:border-none focus:outline-none' />
                  </div>
                  <div className='flex-1 flex-col gap-3 items-start'>
                    <label className='font-bold'>Your Email</label>
                    <input type="text" placeholder='john@gmail.com' className='placeholder:text-sm placeholder:text-zinc-500 px-6 py-3 w-full outline-none border-none bg-zinc-100 focus:border-none focus:outline-none' />
                  </div>
                </div>
                <div className='mt-5'>
                  <p className='font-bold'>i`m interested in...</p>
                  <div className='flex flex-wrap gap-4 pt-3'>
                    <button type='button' className='px-5 py-2 bg-zinc-100 text-zinc-600 rounded-full '>Event</button>
                    <button type='button' className='px-5 py-2 bg-zinc-100 text-zinc-600 rounded-full '>Production</button>
                    <button type='button' className='px-5 py-2 bg-zinc-100 text-zinc-600 rounded-full '>Branding</button>
                  </div>
                </div>
                <div className='mt-5'>
                  <label className='font-bold'>Tell us more about your project</label>
                  <textarea placeholder='something about your great idea' className='bg-zinc-100 placeholder:text-sm placeholder:text-zinc-600 w-full focus:outline-none focus:border-none px-4 py-2' ></textarea>
                </div>
              </div>
              <button type='submit' className='w-full mb-2 lg:mb-10 absolute lg:w-max lg:right-8 bottom-2 lg:bottom-8 px-8 py-4 text-zinc-100 bg-black rounded-full border-gray-500'>Submit the request</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactForm