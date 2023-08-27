"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {

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
        ease: [0.5, 0.8, -0.35, 0.01],
      },
    },
  };
  const slideInRight = {
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
        ease: [0.5, 0.8, -0.35, 0.01],
      },
    },
  };


  return (
    <section>
      <div className="w-full relative px-4 lg:px-14 py-24 lg:py-40  bg-[#171717] overflow-hidden">
        <div className="bg-path" />
        <Image src="/logo.png" alt="logo" width={350} height={350} className="absolute opacity-10 left-32 lg:left-52 right-0 bottom-0" />
        <motion.div
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          className="relative w-full h-full  grid grid-cols-1 lg:grid-cols-12 mx-auto items-center px-2 "
        >
          <motion.div
            variants={slideInLeft}
            className="antialiased  col-span-1 lg:col-span-8 space-y-2 leading-relaxed"
          >
            <span className="flex text-white items-center font-semibold text-4xl lg:text-7xl w-full lg:w-4/6 ">
              <Image src="/logo.png" alt="logo" width={80} height={80} /><span className="relative -left-2">bout Us</span>
            </span>
            <div className="pt-6 ">
              <h2 className="text-white">APLUS MULTI KREASI</h2>
              <h3 className="text-3xl textCustom  lg:text-5xl tracking-wide lg:tracking-wide text-transparent font-extrabold uppercase">
                inspiring partner
              </h3>
            </div>
          </motion.div>
          <div className=" px-6 lg:px-3 col-span-1 lg:col-span-4 border-b pb-8 border-zinc-600 relative top-8">
            <div className="flex flex-col gap-4">
              <motion.div variants={slideInRight} className="leading-relaxed">
                <h3 className="text-semibold text-xl text-zinc-200 font-extrabold uppercase tracking-widest mb-2">
                  Vision
                </h3>
                <p className="text-zinc-500 tracking-wide text-md leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dicta labore autem cum vero? Repellat perspiciatis reiciendis repellendus maiores ea?
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6, easing: easing }}
                className="leading-relaxed"
              >
                <h3 className="text-semibold text-xl text-zinc-100 font-extrabold lg:text-zinc-900  uppercase tracking-widest mb-2">
                  Mission
                </h3>
                <p className="text-zinc-500 tracking-wide text-md leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptates iure eligendi hic quo..
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-full relative bg-[#fff] grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-12 justify-center px-4 py-10 lg:py-20 lg:px-20">
        <div className="relative w-full h-full">
          <div className="w-4 h-4 lg:h-44 rounded-full hidden lg:block bg-red-600 absolute -left-5 top-0 z-0" />
          <h3 className="col-span-1 lg:col-span-1 relative">A STORY OF APLUS COMPANY</h3>
        </div>
        <div className="col-span-1 lg:col-span-6">
          <div className="p-4 border-2 border-gray-500">
            <Image
              src="/event.jpg"
              alt="about us"
              width={1200}
              height={800}
            />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-5 w-full lg:w-5/6 mx-auto">
          <p className="text-lg text-[#636262]">
            We are event and production management whose entire team works together  to accomplish one mission, to create the equation through quality, trust and ease.
            We understand that planning an event can be extremely stressful, confusing, and upredictable. We promise where things might be stressful, we will make it easy. We pride ourselves on the quality of our integrated event service and the event management we deliver to create the ultimate live event for our clients. We want to bring it all together for our client, just like creating an equation to provide you the perfect solution.
          </p>
        </div>
      </div>
      {/* Team Card */}
      <div className="py-14 px-4 w-full h-full">
        <div className="text-center ">
          <h3 className="text-4xl text-zinc-200">— OUR PROFESSIONAL TEAM —</h3>
          <p className="text-zinc-400 text-sm pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  )
}

export default About