"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import LightGallery from "lightgallery/react";
import axios from "axios";
import moment from "moment";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function Home() {
  const [datas, setDatas] = useState([]);
  const [activeButton, setActiveButton] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("/api/services", fetcher);

  useEffect(() => {}, [data]);

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
        setDatas(response.data.resources);
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

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      {/* Header */}
      <section>
        <div className="relative min-h-screen md:min-h-[90vh] py-12 md:py-20 lg:py-24 ">
          <div className='bg-[url("/bg.jpg")] bg-cover bg-bottom absolute z-10 top-0 left-0 w-full h-full '></div>
          <div className="absolute z-20 w-full h-full bottom-0 bg-gradient-to-tr from-black to-transparent " />
          <div className="w-full relative z-30 grid grid-cols-1 lg:grid-cols-12 ">
            <div className="col-span-1 lg:col-span-10 py-20 px-4 lg:py-32 lg:px-12">
              <div className="flex pb-8 leading-loose flex-col w-full  item-center justify-center gap-3 text-zinc-100">
                <h1 className="text-lg lg:text-xl">Multicreation Company</h1>
                <h3 className="text-5xl lg:text-7xl bg-gradient-to-tr tracking-wide lg:tracking-widest from-red-600 to-orange-500 bg-clip-text text-transparent font-extrabold uppercase">
                  inspiring partner
                </h3>
                <p className="w-full lg:w-[60%] leading-loose text-lg lg:text-xl ">
                  Aplus Multicreation are a creative agency in the marketing
                  sphere that focuses on Event, Production and Branding.
                </p>
              </div>
              <button className="px-6 py-2 bg-gradient-to-tr from-red-600 to-orange-500 text-zinc-200 text-sm lg:text-md">
                <Link href="/about">Read More</Link>
              </button>
            </div>

            <div className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center text-white">
              <p className="text-sm block lg:hidden text-center py-6">
                connect with us
              </p>
              <div className="flex flex-row lg:flex-col gap-8 items-center justify-center">
                <Link
                  href="/"
                  className="relative hover:-rotate-12 transition-all duration-300 ease-in-out hover:text-blue-600"
                >
                  <ImFacebook2 size={24} />
                </Link>
                <Link
                  href="/"
                  className="relative hover:-rotate-12 transition-all duration-300 ease-in-out hover:text-pink-600"
                >
                  <GrInstagram size={24} />
                </Link>
                <Link
                  href="/"
                  className="relative hover:-rotate-12 transition-all duration-300 ease-in-out hover:text-black  text-zinc-100"
                >
                  <FaTiktok size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animate Text Aplus */}
      <div className="w-full relative bg-[#000] overflow-hidden py-8 lg:py-12 ">
        <div className="h-full w-24 md:w-96 absolute top-0 left-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="h-full w-24 md:w-96 absolute top-0 right-0 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="target block  relative text-5xl lg:text-7xl  font-bold text-center  py-6 w-full  ">
          <span className="hidden">APLUS MEDIA KREASI</span>
          <div className="absolute z-5 top-[50%] right-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-100 transition-opacity duration-300 text-transparent bg-clip-text bg-gradient-to-tr from-black to-red-600/90 ">
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Media Kreasi
            </span>
          </div>
        </div>
      </div>

      {/* About */}
      <section>
        <div className="w-full h-full lg:min-h-screen px-4 lg:px-8 py-8 bg-black overflow-hidden">
          <div className="w-full h-full">
            <span className="text-zinc-400 text-[18px]">01 — About Us</span>
            <p className="border-b-2 font-bold tracking-wide border-zinc-500 pb-3 text-[24px] md:text-[28px] lg:text-[36px] text-zinc-400 w-full  pt-4">
              We Strive to Innovate
            </p>
            <div className="w-full h-full flex flex-wrap flex-col lg:flex-row items-start justify-center ">
              <div className="flex-auto lg:flex-1 ">
                <p className="text-zinc-400 py-24">
                  Solid Strategy aligned with business needs and robust data
                  analysis are fundamental ingredients to extract actionable
                  insights
                </p>
                <div>
                  <p className="text-zinc-400 font-bold pb-3 px-2">
                    SOME NUMBER ABOUT US
                  </p>
                  <div className="columns-1 sm:columns-2 gap-3 space-y-3 ">
                    <div className="relative overflow-hidden w-full h-[186px] rounded-3xl bg-gradient-to-tr from-zinc-100/90 to-zinc-50 p-5">
                      <p className="text-4xl text-zinc-600 font-bold">+250</p>
                      <p className="text-zinc-600 w-40 text-xs py-1 leading-relaxed">
                        We have successfully completed a total of 300+ projects
                      </p>
                      <div className="absolute -right-4 -bottom-2  ">
                        <video
                          src="/dot.mp4"
                          type="video/mp4"
                          autoPlay
                          muted
                          loop
                          className="w-28 h-28 rounded-full shadow-xl shadow-black/40"
                        />
                      </div>
                    </div>
                    <div className="relative overflow-hidden  w-full h-[186px] rounded-3xl bg-gradient-to-tr from-zinc-100/90 to-zinc-50 p-5">
                      <p className="text-4xl text-zinc-600 font-bold">+10</p>
                      <p className="text-zinc-600 text-xs py-1 leading-relaxed">
                        Years experience
                      </p>
                      <div className="absolute -right-4 -bottom-2  ">
                        <video
                          src="/clock.mp4"
                          type="video/mp4"
                          autoPlay
                          muted
                          loop
                          className="w-28 h-28 rounded-full shadow-xl shadow-black/40"
                        />
                      </div>
                    </div>
                    <div className="relative overflow-hidden  w-full h-[186px] rounded-3xl bg-gradient-to-tr from-zinc-100/90 to-zinc-50 p-5">
                      <p className="text-4xl text-zinc-600 font-bold">+150K</p>
                      <p className="text-zinc-600 w-44 text-xs py-1 leading-relaxed">
                        We’ve gathered dozens of reviews from the clients and +
                        100k reviews from their users
                      </p>
                      <div className="absolute -right-4 -bottom-2  ">
                        <video
                          src="/peer.mp4"
                          type="video/mp4"
                          autoPlay
                          muted
                          loop
                          className="w-28 h-28 rounded-full shadow-xl shadow-black/40"
                        />
                      </div>
                    </div>
                    <div className="relative overflow-hidden  w-full h-[186px] rounded-3xl bg-gradient-to-tr from-zinc-100/90 to-zinc-50 p-5">
                      <p className="text-4xl text-zinc-600 font-bold">+90</p>
                      <p className="text-zinc-600 text-xs py-1 leading-relaxed">
                        Team members all over the city
                      </p>
                      <div className="absolute -right-4 -bottom-2  ">
                        <video
                          src="/ball.mp4"
                          type="video/mp4"
                          autoPlay
                          muted
                          loop
                          className="w-28 h-28 rounded-full shadow-xl shadow-black/40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full hidden sm:relative flex-auto lg:flex lg:flex-1  text-white ">
                <div>
                  <Image
                    src="/1.png"
                    alt=""
                    width={350}
                    height={350}
                    className="absolute right-10 top-40"
                  />
                </div>
                <div>
                  <Image
                    src="/2.png"
                    alt=""
                    width={350}
                    height={350}
                    className="absolute left-24 top-44"
                  />
                </div>
                <div>
                  <Image
                    src="/3.png"
                    alt=""
                    width={250}
                    height={250}
                    className="absolute -right-16 top-60 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="w-full h-full lg:min-h-screen px-4 lg:px-8 py-24 lg:py-32 relative z-auto">
          <div className="w-full h-full">
            <span className="text-zinc-500 text-[18px]">02 — Our Services</span>
            <p className=" text-[24px] md:text-[28px] lg:text-[36px] text-zinc-500 w-full lg:w-[75%] pt-4">
              As a tight-knit team of experts, we create memorable and emotional
              event, production, and branding.
            </p>
          </div>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-center text-white text-center pt-12">
            {data.map((service, i) => (
              <Link
                href={`/services/${service?._id.toString()}`}
                className="group"
                key={i}
              >
                <div
                  className={`relative py-6 px-2 bg-cover w-full h-[350px] rounded-lg flex flex-col items-center justify-between `}
                >
                  <Image
                    src={service?.imageUrl}
                    alt="images"
                    width={1200}
                    height={950}
                    className="object-fit w-full h-[350px] absolute left-0 top-0"
                  />
                  <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-5" />
                  <div>
                    <h1 className="relative text-3xl">{service?.title}</h1>
                  </div>
                  <div></div>
                  <div className="py-4 flex flex-col gap-2">
                    <p className="text-sm leading-relaxed relative text-center border-b pb-2">
                      {service?.desc}
                    </p>
                    <div className="w-full flex items-center justify-center gap-4 flex-wrap">
                      <div className="relative w-fit px-4 py-1 text-zinc-500 text-sm rounded-full bg-zinc-100">
                        <span>{service?.category}</span>
                      </div>
                      <div className="relative w-fit px-4 py-1 text-zinc-500 text-sm rounded-full bg-zinc-100">
                        <span>Planning</span>
                      </div>
                      <div className="relative w-fit px-4 py-1 text-zinc-500 text-sm rounded-full bg-zinc-100">
                        <span>Grand Opening</span>
                      </div>
                      <div className="relative w-fit px-4 py-1 text-zinc-500 text-sm rounded-full bg-zinc-100">
                        <span>Branding</span>
                      </div>
                      <div className="relative w-fit px-4 py-1 text-zinc-500 text-sm rounded-full bg-zinc-100">
                        <span>Production</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="absolute -bottom-1 left-0 -z-10 right-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        </div>
      </section>

      {/* PortFolio */}
      <section>
        <div className="w-full h-full bg-black lg:min-h-screen px-4 lg:px-8 py-24 lg:py-32 relative z-auto overflow-hidden">
          <div className="w-full h-full">
            <span className="text-zinc-500 text-[18px]">
              03 — Our Portfolio
            </span>
            <p className=" text-right text-[24px] ml-auto md:text-[28px] lg:text-[36px] text-zinc-500 w-full lg:w-[75%] pt-4">
              As a tight-knit team of experts, we create memorable and emotional
              event, production, and branding.
            </p>
          </div>
          {/* ANIMATE PORTFOLIO TEXT */}
          <div className="w-full relative bg-[#000] overflow-hidden py-8 lg:py-32 ">
            <div className="h-full w-24 md:w-96 absolute top-0 left-0 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="h-full w-24 md:w-96 absolute top-0 right-0 bg-gradient-to-l from-black to-transparent z-10"></div>
            <div className="target_1 block  relative text-5xl lg:text-7xl  font-bold text-center  py-6 w-full  ">
              <span className="hidden">PORTFOLIO PROJECT</span>
              <div className="absolute z-5 top-[50%] right-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-100 transition-opacity duration-300 text-transparent bg-clip-text bg-gradient-to-br from-orange-500/60 to-red-600/60 ">
                <span className="ml-10 md:ml-14 uppercase ">PORTFOLIO</span>
                <span className="ml-10 md:ml-14 uppercase ">PROJECT</span>
                <span className="ml-10 md:ml-14 uppercase ">PORTFOLIO</span>
                <span className="ml-10 md:ml-14 uppercase ">PROJECT</span>
                <span className="ml-10 md:ml-14 uppercase ">PORTFOLIO</span>
                <span className="ml-10 md:ml-14 uppercase ">PROJECT</span>
                <span className="ml-10 md:ml-14 uppercase ">PORTFOLIO</span>
                <span className="ml-10 md:ml-14 uppercase ">PROJECT</span>
                <span className="ml-10 md:ml-14 uppercase ">PORTFOLIO</span>
                <span className="ml-10 md:ml-14 uppercase ">PROJECT</span>
                <span className="ml-10 md:ml-14 uppercase ">PORTFOLIO</span>
                <span className="ml-10 md:ml-14 uppercase ">PROJECT</span>
                <span className="ml-10 md:ml-14 uppercase ">PORTFOLIO</span>
                <span className="ml-10 md:ml-14 uppercase ">PROJECT</span>
                <span className="ml-10 md:ml-14 uppercase ">PORTFOLIO</span>
                <span className="ml-10 md:ml-14 uppercase ">PROJECT</span>
                <span className="ml-10 md:ml-14 uppercase ">PORTFOLIO</span>
              </div>
            </div>
          </div>
          {/* ANIMATE PORTFOLIO TEXT END*/}

          <div className="buttonContainer px-4 flex flex-wrap gap-5 md:gap-8 relative overflow-scroll z-20 w-full py-10 h-full items-center justify-center mt-4">
            <button
              onClick={() => setActiveButton("")}
              className={`group hover:border-[#fd1313] transition-all text-sm  hover:text-[#fd1313] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${
                activeButton === ""
                  ? " border-[#ff5050] text-[#ff5050] "
                  : " border-zinc-600 text-zinc-500/80 "
              }`}
            >
              All
              <span
                className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-br from-orange-500/60 to-red-600/60 w-full h-full absolute -z-20 ${
                  activeButton === ""
                    ? "bg-gradient-to-br from-orange-500/60 to-red-600/60 -bottom-2 -left-2 border-none"
                    : ""
                } `}
              ></span>
            </button>
            <button
              onClick={() => setActiveButton("event")}
              className={`group hover:border-[#fd1313] transition-all text-sm  hover:text-[#fd1313] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${
                activeButton === "event"
                  ? " border-[#ff5050] text-[#ff5050] "
                  : " border-zinc-600 text-zinc-500/80 "
              }`}
            >
              Events
              <span
                className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-br from-orange-500/60 to-red-600/60 w-full h-full absolute -z-20 ${
                  activeButton === "event"
                    ? "bg-gradient-to-br from-orange-500/60 to-red-600/60 -bottom-2 -left-2 border-none"
                    : ""
                } `}
              ></span>
            </button>
            <button
              onClick={() => setActiveButton("production")}
              className={`group hover:border-[#fd1313] transition-all text-sm  hover:text-[#fd1313] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${
                activeButton === "production"
                  ? " border-[#ff5050] text-[#ff5050] "
                  : " border-zinc-600 text-zinc-500/80 "
              }`}
            >
              Production
              <span
                className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-br from-orange-500/60 to-red-600/60 w-full h-full absolute -z-20 ${
                  activeButton === "production"
                    ? "bg-gradient-to-br from-orange-500/60 to-red-600/60 -bottom-2 -left-2 border-none"
                    : ""
                } `}
              ></span>
            </button>
            <button
              onClick={() => setActiveButton("branding")}
              className={`group hover:border-[#fd1313] transition-all text-sm  hover:text-[#fd1313] duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${
                activeButton === "branding"
                  ? " border-[#ff5050] text-[#ff5050] "
                  : " border-zinc-600 text-zinc-500/80 "
              }`}
            >
              Branding
              <span
                className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-br from-orange-500/60 to-red-600/60 w-full h-full absolute -z-20 ${
                  activeButton === "branding"
                    ? "bg-gradient-to-br from-orange-500/60 to-red-600/60 -bottom-2 -left-2 border-none"
                    : ""
                } `}
              ></span>
            </button>
          </div>
          <LightGallery
            speed={800}
            plugins={[lgZoom]}
            elementClassNames="w-full relative z-10 h-full columns-2 md:columns-3 gap-2 md:gap-6 px-3 md:px-12 py-8 md:py-20"
          >
            {activeButton === "" ? (
              <>
                {!isLoading &&
                  datas.map((g, i) => (
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
                      <div className="md:w-96 h-full md:h-96 overflow-hidden">
                        <Image
                          className="w-full md:w-96 h-full md:h-96 hover:scale-110 transition-all duration-700 ease-linear grayscale-0 lg:grayscale-[10] hover:grayscale-[0]  object-cover mb-6 mx-auto"
                          src={g.secure_url}
                          alt="image"
                          placeholder="blur"
                          blurDataURL={g.secure_url}
                          width={1200}
                          height={900}
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
                      <div className="md:w-96 h-full md:h-96 overflow-hidden">
                        <Image
                          className="w-full md:w-96 hover:scale-x-110 transition-all duration-700 ease-linear grayscale-0 lg:grayscale-[10] hover:grayscale-[0] h-full md:h-96 object-cover mb-6 mx-auto"
                          src={g.secure_url}
                          alt="image"
                          placeholder="blur"
                          blurDataURL={g.secure_url}
                          width={1200}
                          height={900}
                        />
                      </div>
                    </Link>
                  ))}
              </>
            )}
          </LightGallery>
        </div>
      </section>
    </>
  );
}
