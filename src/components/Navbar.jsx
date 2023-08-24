"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import NavMobile from "./NavMobile"

const Navbar = () => {

  const [scroll, setScroll] = useState(false);

  const [open, setOpen] = useState(false);
  const handleBurger = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 180);
    })
  }, []);

  return (
    <header>
      <nav className={` px-8 py-5 w-full z-50 fixed top-0 left-0 flex items-center justify-between  ${scroll ? "bg-[#121212] transition-all duration-300 ease-linear" : "transition-all duration-300 ease-linear"}  `}>
        <div className="relative z-50 flex flex-col items-center justify-center">
          <Link href="/" className="flex items-center">
            <Image alt="" src={`${scroll ? "/logo_red.png" : "/logo.png"}`} width={40} height={40} className="object-cover" />
            <h1 className="text-zinc-100 uppercase text-xl">Aplus</h1>
          </Link>
        </div>
        <ul className={`${scroll ? "bg-white text-zinc-500" : "bg-transparent text-white"}  px-12 hidden lg:relative py-3 rounded-full lg:flex gap-8 `}>
          <li className="flex items-center justify-center">
            <Link href="/about" className="group overflow-hidden h-[22px] px-2 ">
              <div className="flex flex-col items-center group-hover:-translate-y-5 transition-all duration-500 ease ">
                <span className="text-sm">About Us</span>
                <span className="text-sm">About Us</span>
              </div>
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link href="/about" className="group overflow-hidden h-[22px] px-2 ">
              <div className="flex flex-col items-center group-hover:-translate-y-5 transition-all duration-500 ease ">
                <span className="text-sm">Project</span>
                <span className="text-sm">Project</span>
              </div>
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link href="/about" className="group overflow-hidden h-[22px] px-2 ">
              <div className="flex flex-col items-center group-hover:-translate-y-5 transition-all duration-500 ease ">
                <span className="text-sm">Portfolio</span>
                <span className="text-sm">Portfolio</span>
              </div>
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link href="/about" className="group overflow-hidden h-[22px] px-2 ">
              <div className="flex flex-col items-center group-hover:-translate-y-5 transition-all duration-500 ease ">
                <span className="text-sm">Contact Us</span>
                <span className="text-sm">Contact Us</span>
              </div>
            </Link>
          </li>
        </ul>
        <NavMobile open={open} setOpen={setOpen} />
        <div div className="flex items-center gap-4">
          <button className={`btc_container ${scroll ? "bg-gradient-to-r from-red-500 to-orange-500 text-zinc-100  transition-all duration-200 ease-linear" : "bg-white"} group px-4 py-2 bg-white rounded-full  flex items-center justify-center`}>
            <div className="group overflow-hidden h-[22px]">
              <div className="flex flex-col items-center group-hover:-translate-y-5 transition-all duration-200 ease-linear">
                <span className="text-sm">
                  + Become a Client</span>
                <span className="text-sm">
                  + Become a Client</span>
              </div>
            </div>
          </button>
          <div
            className="rounded-md z-[9999] cursor-pointer top-0 flex lg:hidden relative  gap-1.5 flex-col justify-between items-end"
            onClick={handleBurger}
          >
            <span
              className={`h-0.5 w-6 bg-blend-color origin-center rounded-lg  transform transition duration-300 ease-out ${open ? "rotate-45 translate-y-2 bg-white " : "bg-white "
                }`}
            ></span>
            <span
              className={`h-0.5 w-4 bg-blend-color  bg-red-600 rounded-lg transform transition duration-500 ease-out ${open ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-blend-color origin-center rounded-lg  transform transition duration-300  ease-out ${open ? "-rotate-45 -translate-y-2  bg-white " : "bg-white "
                }`}
            ></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar