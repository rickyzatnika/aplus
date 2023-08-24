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
    <div className={`${openForm ? "w-full opacity-100" : "w-0 opacity-0"} overflow-hidden max-h-screen w-0 bg-black/50 fixed right-0 origin-top-right backdrop-blur-sm  z-[99] transition-all duration-100 ease-linear `}>
      <div ref={ref} className=" px-2 transition-all duration-300 ease-linear w-[80%] lg:w-[50%] ml-auto bg-white h-full">
        <div className='relative w-full h-screen flex flex-col items-start justify-between'>
          <div className="w-full">
            <div className="flex item-center justify-between w-full px-4 py-6">
              <h2 className='text-md lg:text-lg '>Become a Client</h2>
              <button className="relative text-xl" onClick={() => setOpenForm(false)}><FaRegWindowClose className='hover:text-red-600' size={25} /></button>
            </div>
            <form className='w-full px-6 py-4'>
              <div className='flex flex-col gap-2 items-start'>
                <label>Company Name :</label>
                <input type="text" className='px-6 py-2 w-full outline-none border rounded-md border-gray-500 focus:border-gray-700' />
              </div>
            </form>
          </div>
          <button className='mb-10 absolute right-8 bottom-8 px-6 py-2 border-2 border-gray-500'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm