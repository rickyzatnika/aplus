import React from 'react'

const About = () => {
  return (
    <div className="w-full h-auto lg:min-h-screen px-4 lg:px-8 py-8 bg-black">
      <div className="w-full h-full">
        <span className="text-zinc-400 text-[18px]">01 — About Us</span>
        <p className="border-b-2 font-bold tracking-wide border-zinc-500 pb-3 text-[24px] md:text-[28px] lg:text-[36px] text-zinc-400 w-full  pt-4">
          We Strive to Innovate
        </p>
        <div className='flex flex-wrap items-center '>
          <div className='flex-auto lg:flex-1 '>
            <p className='text-zinc-400 py-24'>Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights</p>
            <div>
              <p className='text-zinc-400 font-bold pb-3 px-2'>SOME NUMBER ABOUT US</p>
              <div className='columns-1 sm:columns-2 gap-3 space-y-3 '>
                <div className='relative overflow-hidden w-full h-[186px] rounded-3xl bg-gradient-to-tr from-zinc-100/90 to-zinc-50 p-5'>
                  <p className='text-4xl text-zinc-600 font-bold'>+250</p>
                  <p className='text-zinc-600 w-40 text-xs py-1 leading-relaxed'>We have successfully completed a total of 300+ projects</p>
                  <div className='absolute -right-4 -bottom-2  '>
                    <video autoPlay loop className='w-28 h-28 rounded-full shadow-xl shadow-black/40'>
                      <source src="/dot.mp4" type='video/mp4' />
                    </video>
                  </div>
                </div>
                <div className='relative overflow-hidden  w-full h-[186px] rounded-3xl bg-gradient-to-tr from-zinc-100/90 to-zinc-50 p-5'>
                  <p className='text-4xl text-zinc-600 font-bold'>+10</p>
                  <p className='text-zinc-600 text-xs py-1 leading-relaxed'>Years experience</p>
                  <div className='absolute -right-4 -bottom-2  '>
                    <video autoPlay loop className='w-28 h-28 rounded-full shadow-xl shadow-black/40'>
                      <source src="/clock.mp4" type='video/mp4' />
                    </video>
                  </div>
                </div>
                <div className='relative overflow-hidden  w-full h-[186px] rounded-3xl bg-gradient-to-tr from-zinc-100/90 to-zinc-50 p-5'>
                  <p className='text-4xl text-zinc-600 font-bold'>+150K</p>
                  <p className='text-zinc-600 w-44 text-xs py-1 leading-relaxed'>We’ve gathered dozens of reviews from the clients and + 100k reviews from their users</p>
                  <div className='absolute -right-4 -bottom-2  '>
                    <video autoPlay loop className='w-28 h-28 rounded-full shadow-xl shadow-black/40'>
                      <source src="/peer.mp4" type='video/mp4' />
                    </video>
                  </div>
                </div>
                <div className='relative overflow-hidden  w-full h-[186px] rounded-3xl bg-gradient-to-tr from-zinc-100/90 to-zinc-50 p-5'>
                  <p className='text-4xl text-zinc-600 font-bold'>+90</p>
                  <p className='text-zinc-600 text-xs py-1 leading-relaxed'>Team members all over the city</p>
                  <div className='absolute -right-4 -bottom-2  '>
                    <video autoPlay loop className='w-28 h-28 rounded-full shadow-xl shadow-black/40'>
                      <source src="/ball.mp4" type='video/mp4' />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-auto lg:flex-1  text-white'>2</div>
        </div>
      </div>
    </div>
  )
}

export default About