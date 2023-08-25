import Link from 'next/link'
import React from 'react'

import Image from 'next/image'


async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/services`, {
    method: "GET",
    cache: "no-store", // this will fresh data on every fetch request;
    // next: { revalidate: 10 }, // and this , will be refresh data every 10 seconds;
  });
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  return res.json();

}

const Services = async () => {
  const services = await getData();
  return (
    <>
      <div className="w-full h-full lg:min-h-screen px-4 lg:px-8 py-24 lg:py-32 relative z-auto">
        <div className="w-full h-full">
          <span className="text-zinc-500 text-[18px]">02 — Our Services</span>
          <p className=" text-[24px] md:text-[28px] lg:text-[36px] text-zinc-500 w-full lg:w-[75%] pt-4">
            As a tight-knit team of experts, we create memorable and emotional
            event, production, and branding.
          </p>
        </div>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-center text-white text-center pt-12">
          {services.map((service, i) => (
            <Link href={`/services/${service?._id.toString()}`} className="group" key={i}>
              <div className={`relative py-6 px-2 bg-cover w-full h-[350px] rounded-lg flex flex-col items-center justify-between `}>
                <Image src={service?.imageUrl} alt="images" width={1200} height={950} className='object-fit w-full h-[350px] absolute left-0 top-0' />
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-5" />
                <div>
                  <h1 className="relative text-3xl">{service?.title}</h1>
                </div>
                <div></div>
                <div className="py-4 flex flex-col gap-2">
                  <p className="text-sm leading-relaxed relative text-center border-b pb-2">
                    {service?.desc}
                  </p>
                  <div className='w-full flex items-center justify-center gap-4 flex-wrap'>
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
        <div className='absolute -bottom-1 left-0 -z-10 right-0 w-full h-32 bg-gradient-to-t from-black to-transparent' />
      </div>
    </>
  )
}

export default Services