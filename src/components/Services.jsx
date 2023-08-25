import Link from 'next/link'
import React from 'react'
import { services } from '@/lib/data'
import Image from 'next/image'

const Services = () => {
  return (
    <>
      <div className="w-full h-full px-4 lg:px-8 py-8">
        <div className="w-full h-full">
          <span className="text-zinc-500 text-[18px]">01 — Our Services</span>
          <p className=" text-[24px] md:text-[28px] lg:text-[36px] text-zinc-500 w-full lg:w-[75%] pt-4">
            As a tight-knit team of experts, we create memorable and emotional
            event, production, and branding.
          </p>
        </div>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-center text-white text-center pt-12">
          {services.map((service, i) => (
            <Link href={`/service/${service?.slug}`} className="group" key={i}>
              <div className={`relative py-6 px-2 bg-cover w-full h-[350px] rounded-lg flex flex-col items-center justify-between `}>
                <Image src={service?.image} alt={services?.title} width={1200} height={950} className='object-fit w-full h-[350px] absolute left-0 top-0' />
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-5" />
                <div>
                  <h1 className="relative text-3xl">{service?.title}</h1>
                </div>
                <div></div>
                <div className="py-4 flex flex-col gap-2">
                  <p className="text-sm leading-relaxed relative text-center border-b pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    magnam dolores deserunt delectus quas itaque exercitationem
                    officia, sunt id odio unde, cumque fugit inventore. Quasi
                    sed quibusdam maxime rem beatae!
                  </p>
                  <div className="relative flex flex-wrap gap-2 px-2 items-center justify-center">
                    {service?.category.map((cat, i) => (
                      <span key={i} className="w-fit px-4 py-1 text-zinc-500 text-sm rounded-full bg-zinc-100">
                        {cat}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </Link>
          ))}


        </div>
      </div>
    </>
  )
}

export default Services