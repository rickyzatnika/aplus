"use client"

import { useState, useEffect, useRef } from 'react'
import { FaRegWindowClose } from "react-icons/fa"

import { toast } from "react-toastify";

const ContactForm = ({ openForm, setOpenForm }) => {

  const ref = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [interested, setInterested] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);


  const handleContactForm = async (e) => {
    e.preventDefault();

    if (!name || !email || !company || !desc || !interested) {
      toast.error("All fields are required!");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/contact`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          company,
          interested,
          desc,
        }),
      });
      if (!res.ok) {
        throw new Error("Error occured!");
      }
      await res.json();


      const setTimeoutId = setTimeout(() => {
        setLoading(false);
        toast.success('Sent Successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setOpenForm(false);
      }, 3000)

      return () => clearTimeout(setTimeoutId);

    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }

  }


  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenForm(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setOpenForm]);

  return (
    <div className={`${openForm ? "w-full opacity-100" : "w-0 opacity-0"} overflow-y-scroll min-h-screen w-0 bg-black/50 fixed right-0 origin-top-right backdrop-blur-sm  z-[999] transition-all duration-100 ease-linear `}>
      <div ref={ref} className="relative  px-2 transition-all duration-300 overflow-y-scroll ease-linear w-[80%] lg:w-[50%] ml-auto bg-white min-h-screen">
        <div className='w-full h-full flex flex-col items-start justify-between '>
          <div className="relative flex item-start justify-between w-full px-4 py-3">
            <h2 className='text-2xl md:text-3xl lg:text-5xl flex flex-col gap-2 font-bold'>
              Hey! Tell us <span>all the things</span>
            </h2>
            <button className="absolute top-8 right-6 text-xl" onClick={() => setOpenForm(!openForm)}><FaRegWindowClose className='hover:text-red-600' size={25} /></button>
          </div>
          <form onSubmit={handleContactForm} className='w-full  h-full py-4'>
            <div className='w-full px-4'>
              <div className='flex flex-col sm:flex-row gap-2'>
                <div className='flex-1 flex-col gap-3 items-start'>
                  <label className='font-bold'>Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='john doe' className='placeholder:text-sm placeholder:text-zinc-500 px-6 py-3 w-full outline-none border-none bg-zinc-100 focus:border-none focus:outline-none' />
                </div>
                <div className='flex-1 flex-col gap-2 items-start'>
                  <label className='font-bold'>Company</label>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder='Apple' className='placeholder:text-sm placeholder:text-zinc-500 px-6 py-3 w-full outline-none border-none bg-zinc-100 focus:border-none focus:outline-none' />
                </div>
              </div>
              <div className='flex flex-col gap-2 py-2 lg:py-6'>
                <div className=' flex-col gap-3 items-start'>
                  <label className='font-bold'>Your Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='john@gmail.com' className='placeholder:text-sm placeholder:text-zinc-500 px-6 py-3 w-full outline-none border-none bg-zinc-100 focus:border-none focus:outline-none' />
                </div>
                <div className='mt-5 flex flex-col gap-2'>
                  <label className='font-bold'>i`m interested in...</label>
                  <select value={interested} onChange={(e) => setInterested(e.target.value)} className='w-full py-3 px-3 '>
                    <option style={{ display: "none" }}>Choose Here</option>
                    <option value="Event" >Event</option>
                    <option value="Production" >Production</option>
                    <option value="Branding" >Branding</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-bold'>Tell us more about your project</label>
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='something about your great idea' className='bg-zinc-100 placeholder:text-sm placeholder:text-zinc-600 w-full focus:outline-none focus:border-none px-4 py-2' ></textarea>
              </div>
            </div>
            <button type='submit' className='w-full mb-8 lg:mb-0 relative lg:absolute lg:w-max lg:right-8 right-0 bottom-2 px-8 py-4 text-zinc-100 bg-[#111] hover:bg-black rounded-full border-gray-500'>
              {!loading ? <span>Submit the request</span> : <span>sending request..</span>}
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ContactForm