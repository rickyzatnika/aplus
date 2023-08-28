"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

const NavMobile = ({ open, setOpen, openForm, setOpenForm }) => {



  return (
    <>
      <nav className={`fixed w-full min-h-screen bg-[#131313] top-0 left-0 flex flex-col items-center justify-between gap-5 lg:hidden transition-all duration-300 ease-in-out ${open ? " text-white left-0" : "left-[-100%]"} `}>
        <span></span>
        <ul className='gap-5 flex flex-col items-center text-xl'>
          <li>
            <button onClick={() => setOpen(false)}>
              <Link href="/about">About Us</Link>
            </button>
          </li>
          <li>
            <button onClick={() => setOpen(false)} >
              <Link href="/projects">Projects</Link>
            </button>
          </li>
          <li>
            <button onClick={() => setOpen(false)} >
              <Link href="/portfolio">Portfolio</Link>
            </button>
          </li>
          <li>
            <button onClick={() => setOpenForm(true)}>Contact Us</button>
          </li>
        </ul >
        <div className='flex gap-6 items-center justify-center py-6 px-4'>
          <Link href="/">
            <ImFacebook2 size={24} />
          </Link>
          <Link href="/">
            <GrInstagram size={24} />
          </Link>
          <Link href="/">
            <FaTiktok size={24} />
          </Link>
        </div>

      </nav>
    </>
  )
}

export default NavMobile