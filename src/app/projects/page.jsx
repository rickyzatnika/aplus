"use client"

import { useEffect } from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";


const Services = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`/api/services`, fetcher);

  useEffect(() => { }, [data]);

  if (error)
    return (
      <div className="min-h-screen w-full flex flex-col gap-2 items-center justify-center text-white">
        <Image src="/logo_merah.png" alt="logo" width={100} height={100} />
        <div className="flex gap-2 items-center justify-center">
          <span>Ups sorry something went wrong!</span>
        </div>
      </div>
    );

  if (!data)
    return (
      <div className="min-h-screen w-full flex flex-col gap-2 items-center justify-center text-white">
        <Image src="/logo_merah.png" alt="logo" width={100} height={100} />
        <div className="flex gap-2 items-center justify-center">
          <span>Loading...</span>
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      </div>
    );

  return (
    <>
      <section className="overflow-hidden">

        <div className="w-full h-full bg-white py-8">
          <p className="text-center leading-relaxed text-xl text-black/80 w-full lg:w-4/6 mx-auto p-6 text">
            The best ideas come frome meetings, which is why when working with us there is no such thing as too many meetings.
            Want to have a meeting to go over all of the event and production details. <br /> Lets do it

          </p>

          <div className="w-full h-full px-2 lg:px-20">
            <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 py-10 ">
              {/* Event Documentation */}
              {data?.map((project, i) => (
                <Link key={i} href={`/projects/${project?._id.toString()}`} >
                  <div className="group cursor-pointer transition duration-700 ease-linear mb-6 lg:mb-0">
                    <div className="overflow-hidden w-full h-full lg:h-80 relative group">
                      <Image
                        src={project?.imageUrl}
                        alt={project?.slug}
                        width={1200}
                        height={800}
                        objectFit="cover"
                        className="group group-hover:scale-110 transition duration-700 ease-linear"
                      />
                      <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300  ease-linear bg-lime-300/90 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">
                        <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  bg-inherit pt-5 pb-5 w-full  ">
                          <span className="hidden">{project?.title}</span>
                          <div className="group absolute z-2 top-[50%] left-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-20 transition-opacity duration-700 group-hover:opacity-100 text-white">
                            <span className="ml-8">{project?.title}</span>
                            <span className="ml-8">{project?.title}</span>
                            <span className="ml-8">{project?.title}</span>
                            <span className="ml-8">{project?.title}</span>
                            <span className="ml-8">{project?.title}</span>
                            <span className="ml-8">{project?.title}</span>
                            <span className="ml-8">{project?.title}</span>
                            <span className="ml-8">{project?.title}</span>
                            <span className="ml-8">{project?.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="pt-3 font-semibold text-xl">
                      {project?.title}
                    </h3>
                    <p>
                      {project?.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
