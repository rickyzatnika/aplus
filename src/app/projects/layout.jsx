"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const ServiceLayout = ({ children }) => {

  const easing = [0.5, 0.8, -0.35, 0.01];
  const slideInLeft = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: easing,
      },
    },
  };
  const slideInRight = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: easing,
      },
    },
  };

  return (
    <div>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="w-full  py-24 lg:py-40 relative bg-[#171717] px-2 "
      >
        <motion.div initial={{ y: 250 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="absolute z-10 left-28 lg:left-52 right-0 bottom-0 ">
          <Image src="/logo.png" alt="logo" width={350} height={350} className="opacity-20 " />
        </motion.div>
        <div className="bg-path" />
        <div className="w-full relative lg:w-5/6 mb-20 grid grid-cols-1 lg:grid-cols-12 mx-auto items-center  px-2 ">
          <motion.div
            variants={slideInLeft}
            className="antialiased  col-span-1 lg:col-span-8 space-y-2 leading-relaxed"
          >
            <h2 className="text-[#adadad] pb-2 text-xl lg:text-1xl  font-bold ">
              OUR PROJECTS
            </h2>
            <p className="textCustom font-bold text-5xl lg:text-6xl w-full lg:w-4/6 ">
              CREATIVE <br /> INNOVATIVE <br /> INSPIRING
            </p>
          </motion.div>
          <motion.div
            variants={slideInRight}
            className="col-span-1 lg:col-span-4  pb-8 relative top-8"
          >
            <p className="text-zinc-400 lg:text-zinc-600 relative top-0 lg:top-32 antialiased tracking-wide">
              We focus on finding way to make life as easy as possible when planning an event and production. We always want to remind you that our team, is your team.
            </p>
          </motion.div>
        </div>
      </motion.div>
      {children}
    </div>
  )
}

export default ServiceLayout