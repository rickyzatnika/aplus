import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok, FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full relative z-50 flex flex-col  gap-0  items-center justify-between ">
      <div className="footer bg-[#161616] py-12 lg:py-20 p-8 text-base-content">
        <div className="flex flex-col">
          <Image src="/logo.png" alt='logo_aplus' width={100} height={100} className='object-cover ' />
          <p className="w-full max-w-sm text-justify text-zinc-400">
            Aplus Multi Kreasi are a creative agency in the marketing spehere that focuses on Event, Production and Branding.
          </p>
        </div>
        <div className=''>
          <span className=" text-zinc-200 font-semibold mb-2">Support</span>

          <div className='flex gap-2 items-center text-zinc-400'>
            <FaPhoneSquareAlt size={20} />
            <span>081214707415</span>
          </div>
          <div className='flex gap-2 items-center text-zinc-400'>
            <AiOutlineMail size={20} />
            <span>aplusmultikreasi@gmail.com</span>
          </div>
          <div className='flex gap-2 items-center text-zinc-400'>
            <BiSolidMap size={20} />
            <span>Jl. Sariwangi 165, Parongpong - <br /> Kabupaten Bandung Barat 40559</span>
          </div>

        </div>
        <div className=''>
          <span className=" text-zinc-200 font-semibold">Company</span>
          <Link href="/about" passHref={true} className="text-zinc-400 link link-hover">
            About Us
          </Link>
          <Link href="/portfolio" passHref={true} className="text-zinc-400 link link-hover">
            Services
          </Link>
          <Link href="/news" passHref={true} className="text-zinc-400 link link-hover">
            Portfolio
          </Link>
          <Link href="/contact" passHref={true} className="text-zinc-400 link link-hover">
            Contact Us
          </Link>
        </div>
        <div className=''>
          <span className=" text-zinc-200 font-semibold">Legal</span>
          <Link href="/" className="text-zinc-400 link link-hover">
            Terms of use
          </Link>
          <Link href="/" className="text-zinc-400 link link-hover">
            Privacy policy
          </Link>
          <Link href="/" className="text-zinc-400 link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="w-full bg-[#0c0c0c] gap-5 p-8 flex items-center justify-center md:justify-between flex-col-reverse md:flex-row">
        <div className="text-sm text-center text-zinc-400 ">
          <Link href="/" passHref={true}>
            APLUS MULTI KREASI © 2023 All Right Reserved
          </Link>
        </div>
        <div className='flex gap-5 items-center text-zinc-400 py-2 px-4'>
          <Link href="/">
            <ImFacebook2 size={20} />
          </Link>
          <Link href="/">
            <GrInstagram size={20} />
          </Link>
          <Link href="/">
            <FaTiktok size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer