"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

const NavMobile = ({ open, setOpen }) => {



  return (
    <>
      <nav className={`fixed w-full min-h-full bg-[#131313] top-0 left-0 flex flex-col items-center justify-between gap-5 lg:hidden transition-all duration-300 ease-in-out ${open ? " text-white left-0" : "left-[-100%]"} `}>
        <div></div>
        <ul className='gap-5 flex flex-col items-center text-xl'>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
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