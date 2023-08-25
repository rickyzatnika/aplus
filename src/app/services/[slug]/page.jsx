"use client"

import React, { useState, useEffect } from "react";


const BlogDetail = ({ params }) => {

  const [blogDetails, setBlogDetails] = useState("");


  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/services/${params.id}`, { cache: 'no-store' })


      setBlogDetails(res.json());

    }
    fetchBlog();
  }, [params.id]);


  return <div className="py-44 relative uppercase bg-black text-white text-8xl">{blogDetails?.slug}</div>;
};

export default BlogDetail;
