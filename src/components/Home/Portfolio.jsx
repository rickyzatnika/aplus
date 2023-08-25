"use client"

import React, { useState, useEffect } from 'react';
import LightGallery from "lightgallery/react";
import AnimatePortfolio from '../AnimatePortfolio';
import axios from 'axios';
import moment from 'moment';
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {

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
    <div className="w-full h-full bg-black lg:min-h-screen px-4 lg:px-8 py-24 lg:py-32 relative z-auto overflow-hidden">
      <div className="w-full h-full">
        <span className="text-zinc-500 text-[18px]">03 — Our Portfolio</span>
        <p className=" text-right text-[24px] ml-auto md:text-[28px] lg:text-[36px] text-zinc-500 w-full lg:w-[75%] pt-4">
          As a tight-knit team of experts, we create memorable and emotional
          event, production, and branding.
        </p>
      </div>
      <AnimatePortfolio />
      <div className="buttonContainer px-4 flex flex-wrap gap-5 md:gap-8 relative overflow-scroll z-20 w-full py-10 h-full items-center justify-center mt-4">
        <button
          onClick={() => setActiveButton("")}
          className={`group hover:border-[#fd1313] transition-all text-sm  hover:text-[#fd1313] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${activeButton === ""
            ? " border-[#ff5050] text-[#ff5050] "
            : " border-zinc-600 text-zinc-500/80 "
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
            : " border-zinc-600 text-zinc-500/80 "
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
            : " border-zinc-600 text-zinc-500/80 "
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
            : " border-zinc-600 text-zinc-500/80 "
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
      <LightGallery
        speed={800}
        plugins={[lgZoom]}
        elementClassNames="w-full relative z-10 h-full columns-2 lg:columns-3 gap-6 px-3 md:px-12 py-8 md:py-20"
      >
        {activeButton === "" ? (
          <>
            {!isLoading &&
              data.map((g, i) => (
                <Link
                  key={i}
                  href={g.secure_url}
                  passHref
                  prefetch={true}
                  data-sub-html={`<h4>© APLUS MEDIA KREASI </h4> <p class="date"> ${moment(
                    g.created_at
                  )
                    .startOf("hour")
                    .fromNow()}</p>`}
                >
                  <div className='w-full md:w-96 h-full md:h-96  overflow-hidden'>
                    <Image
                      className="w-full md:w-96 h-full md:h-96  hover:scale-110 transition-all duration-1000 ease-linear  object-cover mb-6 mx-auto"
                      src={g.secure_url}
                      alt="image"
                      placeholder="blur"
                      blurDataURL={g.secure_url}
                      width={900}
                      height={600}

                    />
                  </div>
                </Link>
              ))}
          </>
        ) : (
          <>
            {!isLoading &&
              data.map((g, i) => (
                <Link
                  key={i}
                  href={g.secure_url}
                  passHref
                  prefetch={true}
                  data-sub-html={`<h4>© APLUS MEDIA KREASI </h4> <p class="date"> ${moment(
                    g.created_at
                  )
                    .startOf("hour")
                    .fromNow()}</p>`}
                >
                  <div className='w-full md:w-96 h-full md:h-96  overflow-hidden'>
                    <Image
                      className="w-full md:w-96 h-full md:h-96  hover:scale-110 transition-all duration-1000 ease-linear object-cover mb-6 mx-auto"
                      src={g.secure_url}
                      alt="image"
                      placeholder="blur"
                      blurDataURL={g.secure_url}
                      width={900}
                      height={600}

                    />
                  </div>
                </Link>
              ))}
          </>
        )}
      </LightGallery>
    </div>
  )

}

export default Portfolio