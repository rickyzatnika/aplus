"use client"

import { useState, useEffect } from 'react'

const ContactForm = ({ openForm, setOpenForm }) => {


  return (
    <div className={`${openForm ? "w-full " : "w-0 "} overflow-hidden max-h-screen w-full bg-transparent fixed right-0 origin-top-right backdrop-blur-sm  z-[99] transition-all duration-200 ease-linear `}>
      <div className=" py-2 px-2 transition-all duration-300 ease-linear w-[90%] lg:w-[70%] ml-auto bg-white h-full">
        <div className='relative w-full h-screen flex flex-col items-start justify-between'>
          <div className="w-full">
            <div className="flex item-center justify-between w-full px-4 py-2">
              <h2 className='text-md lg:text-lg '>Become a Client</h2>
              <button className="relative text-xl" onClick={() => setOpenForm(false)}>X</button>
            </div>
            <form className='w-full px-6 py-4'>
              <div className='flex flex-col gap-2 items-start'>
                <label>Company Name :</label>
                <input type="text" className='px-6 py-2 w-full outline-none border rounded-md border-gray-500 focus:border-gray-700' />
              </div>
            </form>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm