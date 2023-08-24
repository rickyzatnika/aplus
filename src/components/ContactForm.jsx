"use client"

import { useState, useEffect } from 'react'

const ContactForm = ({ openForm, setOpenForm }) => {


  return (
    <div className={`${openForm ? "right-0" : "-right-[100%]"} overflow-hidden min-h-screen w-full bg-transparent fixed top-0 backdrop-blur-sm right-0 z-[99] transition-all duration-200 ease-linear `}>
      <div className=" py-2 px-2 transition-all duration-300 ease-linear w-[90%] lg:w-[70%] absolute top-0 right-0 bg-white h-full">
        <button className="absolute top-6 right-6 text-xl" onClick={() => setOpenForm(false)}>X</button>
        <div className='relative w-full h-screen flex flex-col items-start justify-between'>
          <div>
            <h2 className='text-md lg:text-lg '>Become a Client</h2>
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