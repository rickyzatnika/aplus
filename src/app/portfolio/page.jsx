"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import LightGallery from "lightgallery/react";
import axios from "axios";
import moment from "moment";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const Portfolio = () => {

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

  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGallery = async () => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;
      const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
      const auth = btoa(`${apiKey}:${apiSecret}`);

      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URI}/v1_1/${cloudName}/resources/image?type=upload&prefix=photo/aplus/${activeButton}&max_results=50`,
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );
        setData(response.data.resources);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
        // Setelah permintaan selesai, isLoading diubah menjadi false
      }
    };
    getGallery();
  }, [activeButton]);

  return (
    <section className="overflow-hidden">
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
            <h2 className="text-[#adadad] pb-2 text-xl uppercase lg:text-1xl  font-bold ">
              our work
            </h2>
            <p className="textCustom font-bold text-5xl lg:text-6xl w-full lg:w-4/6 ">
              Photo GaLLery
            </p>
          </motion.div>
          <motion.div
            variants={slideInRight}
            className="col-span-1 lg:col-span-4  pb-8 relative top-8"
          >
            <p className="text-zinc-400 lg:text-zinc-600 relative top-0 lg:top-32 antialiased tracking-wide">
              The best ideas come frome meetings, which is why when working with us there is no such thing as too many meetings.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full h-full bg-white py-6 lg:py-14">
        <div className="buttonContainer px-4 flex flex-wrap gap-5 md:gap-8 relative overflow-scroll z-20 w-full py-10 h-full items-center justify-center ">
          <button
            onClick={() => setActiveButton("")}
            className={`group hover:border-[#fd1313] transition-all text-sm  hover:text-[#fd1313] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${activeButton === ""
              ? " border-[#ff5050] text-[#ff5050] "
              : " border-zinc-600 text-zinc-400 "
              }`}
          >
            All
            <span
              className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-br from-orange-500/60 to-red-600/60 w-full h-full absolute -z-20 ${activeButton === ""
                ? "bg-gradient-to-br from-orange-500/60 to-red-600/60 -bottom-2 -left-2 border-none"
                : ""
                } `}
            ></span>
          </button>
          <button
            onClick={() => setActiveButton("event")}
            className={`group hover:border-[#fd1313] transition-all text-sm  hover:text-[#fd1313] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${activeButton === "event"
              ? " border-[#ff5050] text-[#ff5050] "
              : " border-zinc-600 text-zinc-400 "
              }`}
          >
            Events
            <span
              className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-br from-orange-500/60 to-red-600/60 w-full h-full absolute -z-20 ${activeButton === "event"
                ? "bg-gradient-to-br from-orange-500/60 to-red-600/60 -bottom-2 -left-2 border-none"
                : ""
                } `}
            ></span>
          </button>
          <button
            onClick={() => setActiveButton("production")}
            className={`group hover:border-[#fd1313] transition-all text-sm  hover:text-[#fd1313] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${activeButton === "production"
              ? " border-[#ff5050] text-[#ff5050] "
              : " border-zinc-600 text-zinc-400 "
              }`}
          >
            Production
            <span
              className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-br from-orange-500/60 to-red-600/60 w-full h-full absolute -z-20 ${activeButton === "production"
                ? "bg-gradient-to-br from-orange-500/60 to-red-600/60 -bottom-2 -left-2 border-none"
                : ""
                } `}
            ></span>
          </button>
          <button
            onClick={() => setActiveButton("branding")}
            className={`group hover:border-[#fd1313] transition-all text-sm  hover:text-[#fd1313] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${activeButton === "branding"
              ? " border-[#ff5050] text-[#ff5050] "
              : " border-zinc-600 text-zinc-400 "
              }`}
          >
            Branding
            <span
              className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-br from-orange-500/60 to-red-600/60 w-full h-full absolute -z-20 ${activeButton === "branding"
                ? "bg-gradient-to-br from-orange-500/60 to-red-600/60 -bottom-2 -left-2 border-none"
                : ""
                } `}
            ></span>
          </button>
        </div>
        {isLoading && (
          <div className="w-full h-full flex flex-col gap-3 items-center justify-center z-50 right-0 text-center mt-10 md:mt-40 text-zinc-200">
            <Image
              src="/logo_merah.png"
              width={100}
              height={100}
              priority={true}
              alt="loading..."
              className="mx-auto flex items-center justify-center"
            />
            <div className="flex text-zinc-800 gap-2 items-center justify-center">
              <span>Loading...</span>
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          </div>
        )}
        <div className="w-full h-full columns-2 md:columns-3  gap-2 md:gap-3 px-3 md:px-12 py-8 md:py-20">
          {activeButton === "" ? (
            <>
              {!isLoading &&
                data.map((g, i) => (
                  <LightGallery
                    speed={800}
                    elementClassNames="w-full relative mb-3 z-10 overflow-hidden "
                    key={i}
                  >
                    <Link
                      href={g.secure_url}
                      passHref
                      prefetch={true}
                      data-sub-html={`<h4>© APLUS MULTI KREASI - INSPIRING PARTNER </h4> <p class="date"> ${moment(
                        g.created_at
                      )
                        .startOf("hour")
                        .fromNow()}</p>`}
                    >
                      <div className="w-full h-full  overflow-hidden">
                        <Image
                          className="w-full  h-full  hover:scale-110 transition-all duration-700 ease-linear  object-cover  mx-auto"
                          src={g.secure_url}
                          alt="image"
                          placeholder="blur"
                          blurDataURL={g.secure_url}
                          width={1200}
                          height={900}
                        />
                      </div>
                    </Link>
                  </LightGallery>
                ))}
            </>
          ) : (
            <>
              {!isLoading &&
                data.map((g, i) => (
                  <LightGallery
                    speed={800}
                    elementClassNames="w-full overflow-hidden relative mb-3 z-10 h-full "
                    key={i}
                  >
                    <Link
                      href={g.secure_url}
                      passHref
                      prefetch={true}
                      data-sub-html={`<h4>© APLUS MULTI KREASI - INSPIRING PARTNER </h4> <p class="date"> ${moment(
                        g.created_at
                      )
                        .startOf("hour")
                        .fromNow()}</p>`}
                    >
                      <div className="w-full h-full  overflow-hidden">
                        <Image
                          className="w-full h-full hover:scale-110 transition-all duration-700 ease-linear  object-cover  mx-auto"
                          src={g.secure_url}
                          alt="image"
                          placeholder="blur"
                          blurDataURL={g.secure_url}
                          width={1200}
                          height={900}
                        />
                      </div>
                    </Link>
                  </LightGallery>
                ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Portfolio