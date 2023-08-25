"use client";


import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";


const AddBlog = () => {
  const router = useRouter();


  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const CLOUD_NAME = "inkara-id";
  const UPLOAD_PRESET = "myBlog_project_nextjs";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photo || !title || !category || !desc || !slug) {

      return;
    }
    try {
      setLoading(true);
      const imageUrl = await uploadImage();

      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/services`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          slug,
          category,
          imageUrl,

        }),
      });

      if (!res.ok) {
        throw new Error("Error occured!");
      }
      await res.json();

      const setTimeoutId = setTimeout(() => {
        setLoading(false);
        router.push("/");
      }, 3000)
      return () => clearTimeout(setTimeoutId);

    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    if (!photo) return;
    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      const imageUrl = data["secure_url"];

      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className="w-full h-full py-40 px-14">
        <h2 className="mb-6">Add Services</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-3 bg-zinc-100 focus:outline-indigo-400"
          />
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="px-4 py-3 bg-zinc-100 focus:outline-indigo-400"
          />
          <input
            placeholder="Slug"
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="px-4 py-3 bg-zinc-100 focus:outline-indigo-400"
          />
          <select
            value={category}
            className="px-4 py-3 bg-zinc-100 focus:outline-indigo-400"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Event">Event</option>
            <option value="Production">Production</option>
            <option value="Branding">Branding</option>

          </select>
          <input
            type="file"
            id="image"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="file-input text-sm text-zinc-500 bg-zinc-100 file-input-bordered w-full max-w-xs"
          />

          <button
            className="btn capitalize btn-md text-sm w-fit px-8  font-normal border-none bg-[#2A323C] hover:bg-[#27303a] text-gray-300/80 "
            type="submit"
          >
            {loading ? <div className="flex items-center gap-1"><span>Loading</span> <span className="loading loading-spinner loading-xs"></span></div> : <div>Publish</div>}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
