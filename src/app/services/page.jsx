"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Services = () => {
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

  // const handleActive = () => {
  //   setIsActive(true);
  // };

  return (
    <>
      <section className="overflow-hidden">
        <motion.div
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          className="w-full  py-24 lg:py-40 relative bg-[#171717] px-2 "
        >
          <div className="bg-path" />
          <Image src="/logo.png" alt="logo" width={350} height={350} className="absolute z-10 opacity-10 left-32 lg:left-52 right-0 bottom-0" />
          <div className="w-full relative lg:w-5/6 mb-20 grid grid-cols-1 lg:grid-cols-12 mx-auto items-center  px-2 ">
            <motion.div
              variants={slideInLeft}
              className="antialiased  col-span-1 lg:col-span-8 space-y-2 leading-relaxed"
            >
              <h2 className="text-[#adadad] pb-2 text-xl lg:text-1xl  font-bold ">
                OUR SERVICES
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
        <div className="w-full h-full bg-white py-8">
          <p className="text-center leading-relaxed text-xl text-black/80 w-full lg:w-4/6 mx-auto p-6 text">
            The best ideas come frome meetings, which is why when working with us there is no such thing as too many meetings.
            Want to have a meeting to go over all of the event and production details. <br /> Lets do it

          </p>

          <div className="w-full h-full px-2 lg:px-20">
            <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 py-10 ">
              {/* Event Documentation */}
              <Link href="/services/event-documentation" passHref>
                <div className="group cursor-pointer transition duration-700 ease-linear mb-6 lg:mb-0">
                  <div className="overflow-hidden w-full h-full lg:h-80 relative group">
                    <Image
                      src="/baloon.jpg"
                      alt="event-documentation"
                      width={1200}
                      height={800}
                      objectFit="cover"
                      className="group group-hover:scale-110 transition duration-700 ease-linear"
                    />
                    <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300  ease-linear bg-lime-300/90 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">

                      <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  bg-inherit pt-5 pb-5 w-full  ">
                        <span className="hidden">Event Management</span>
                        <div className="group absolute z-2 top-[50%] left-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-20 transition-opacity duration-700 group-hover:opacity-100 text-white">
                          <span className="ml-8">Event Management</span>
                          <span className="ml-8">Event Management</span>
                          <span className="ml-8">Event Management</span>
                          <span className="ml-8">Event Management</span>
                          <span className="ml-8">Event Management</span>
                          <span className="ml-8">Event Management</span>
                          <span className="ml-8">Event Management</span>
                          <span className="ml-8">Event Management</span>
                          <span className="ml-8">Event Management</span>
                        </div>
                      </div>

                    </div>
                  </div>
                  <h3 className="pt-3 font-semibold text-xl">
                    Event Management
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, nobis!
                  </p>
                </div>
              </Link>
              {/* Video Documentation */}
              <Link href="/services/video-documentation" passHref>
                <div className="group cursor-pointer transition duration-700 ease-linear mb-6 lg:mb-0">
                  <div className="overflow-hidden w-full h-full lg:h-80 relative group">
                    <Image
                      src="/branding.jpg"
                      alt="video-documentation"
                      width={1200}
                      height={800}
                      objectFit="cover"
                      className="group group-hover:scale-110 transition duration-700 ease-linear"
                    />
                    <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300 ease-linear bg-blue-500/90 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">

                      <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  bg-inherit pt-5 pb-5 w-full  ">
                        <span className="hidden">Production</span>
                        <div className="group absolute z-2 top-[50%] left-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-20 transition-opacity duration-700 group-hover:opacity-100 text-white">
                          <span className="ml-8">Production</span>
                          <span className="ml-8">Production</span>
                          <span className="ml-8">Production</span>
                          <span className="ml-8">Production</span>
                          <span className="ml-8">Production</span>
                          <span className="ml-8">Production</span>
                          <span className="ml-8">Production</span>
                          <span className="ml-8">Production</span>
                          <span className="ml-8">Production</span>
                        </div>
                      </div>

                    </div>
                  </div>
                  <h3 className="pt-3 font-semibold text-xl">
                    Production
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, nobis!
                  </p>
                </div>
              </Link>
              {/* Prewedding Section */}
              <Link href="/services/prewedding" passHref>
                <div className="group cursor-pointer transition duration-700 ease-linear mb-6 lg:mb-0">
                  <div className="overflow-hidden w-full h-full lg:h-80 relative group">
                    <Image
                      src="/event.jpg"
                      alt="prewedding"
                      width={1200}
                      height={800}
                      objectFit="cover"
                      className="group group-hover:scale-110 transition duration-700 ease-linear"
                    />
                    <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300 ease-linear bg-gray-500/90 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">

                      <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  bg-inherit pt-5 pb-5 w-full  ">
                        <span className="hidden">Branding</span>
                        <div className="group absolute z-2 top-[50%] left-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-20 transition-opacity duration-700 group-hover:opacity-100 text-white">
                          <span className="ml-8">Branding</span>
                          <span className="ml-8">Branding</span>
                          <span className="ml-8">Branding</span>
                          <span className="ml-8">Branding</span>
                          <span className="ml-8">Branding</span>
                          <span className="ml-8">Branding</span>
                          <span className="ml-8">Branding</span>
                          <span className="ml-8">Branding</span>
                          <span className="ml-8">Branding</span>
                        </div>
                      </div>

                    </div>
                  </div>
                  <h3 className="pt-3 font-semibold text-xl">Branding</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, nobis!
                  </p>
                </div>
              </Link>
              {/* Wedding */}
              <Link href="/services/wedding" passHref>
                <div className="group cursor-pointer transition duration-700 ease-linear mb-6 lg:mb-0">
                  <div className="overflow-hidden w-full h-full lg:h-80 relative group">
                    <Image
                      src="/baloon.jpg"
                      alt="wedding"
                      width={1200}
                      height={800}
                      objectFit="cover"
                      className="group group-hover:scale-110 transition duration-700 ease-linear"
                    />
                    <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300 ease-linear bg-purple-500/90 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">

                      <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  bg-inherit pt-5 pb-5 w-full  ">
                        <span className="hidden">Interior</span>
                        <div className="group absolute z-2 top-[50%] left-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-20 transition-opacity duration-700 group-hover:opacity-100 text-white">
                          <span className="ml-8">Interior</span>
                          <span className="ml-8">Interior</span>
                          <span className="ml-8">Interior</span>
                          <span className="ml-8">Interior</span>
                          <span className="ml-8">Interior</span>
                          <span className="ml-8">Interior</span>
                          <span className="ml-8">Interior</span>
                          <span className="ml-8">Interior</span>
                          <span className="ml-8">Interior</span>
                        </div>
                      </div>

                    </div>
                  </div>
                  <h3 className="pt-3 font-semibold text-xl">Interior</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, nobis!
                  </p>
                </div>
              </Link>
              {/* Logo Design */}
              <Link href="/services/logo-design" passHref>
                <div className="group cursor-pointer transition duration-700 ease-linear mb-6 lg:mb-0">
                  <div className="overflow-hidden w-full h-full lg:h-80 relative group">
                    <Image
                      src="/branding.jpg"
                      alt="logo-design"
                      width={1200}
                      height={800}
                      objectFit="cover"
                      className="group group-hover:scale-110 transition duration-700 ease-linear"
                    />
                    <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300 ease-linear bg-sky-200/90 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">

                      <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  bg-inherit pt-5 pb-5 w-full  ">
                        <span className="hidden">MURAL</span>
                        <div className="group absolute z-2 top-[50%] left-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-20 transition-opacity duration-700 group-hover:opacity-100 text-white">
                          <span className="ml-8">MURAL</span>
                          <span className="ml-8">MURAL</span>
                          <span className="ml-8">MURAL</span>
                          <span className="ml-8">MURAL</span>
                          <span className="ml-8">MURAL</span>
                          <span className="ml-8">MURAL</span>
                          <span className="ml-8">MURAL</span>
                          <span className="ml-8">MURAL</span>
                          <span className="ml-8">MURAL</span>
                        </div>
                      </div>

                    </div>
                  </div>
                  <h3 className="pt-2 font-semibold text-xl">MURAL</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, nobis!
                  </p>
                </div>
              </Link>
              {/* Photo Product */}
              <Link href="/services/photo-product" passHref>
                <div className="group cursor-pointer transition duration-700 ease-linear mb-6 lg:mb-0">
                  <div className="overflow-hidden w-full h-full lg:h-80 relative group">
                    <Image
                      src="/event.jpg"
                      alt="photo-product"
                      width={1200}
                      height={800}
                      objectFit="cover"
                      className="group group-hover:scale-110 transition duration-700 ease-linear"
                    />
                    <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300 ease-linear bg-yellow-300/70 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">

                      <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  bg-inherit pt-5 pb-5 w-full  ">
                        <span className="hidden">Photo Product</span>
                        <div className="group absolute z-2 top-[50%] left-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-20 transition-opacity duration-700 group-hover:opacity-100 text-white">
                          <span className="ml-8">Photo Product</span>
                          <span className="ml-8">Photo Product</span>
                          <span className="ml-8">Photo Product</span>
                          <span className="ml-8">Photo Product</span>
                          <span className="ml-8">Photo Product</span>
                          <span className="ml-8">Photo Product</span>
                          <span className="ml-8">Photo Product</span>
                          <span className="ml-8">Photo Product</span>
                          <span className="ml-8">Photo Product</span>
                        </div>
                      </div>

                    </div>
                  </div>
                  <h3 className="pt-2 font-semibold text-xl">Photo Product</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, nobis!
                  </p>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
