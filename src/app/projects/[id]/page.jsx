import React from 'react'


async function getData(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/services/${id}`,
        {
            cache: "no-store", // this will fresh data on every fetch request;
            // next: { revalidate: 10 }, // and this , will be refresh data every 10 seconds;
        }
    );
    if (!res) {
        return notFound();
    }
    return res.json();
}


const ServiceDetails = async ({ params }) => {

    const data = await getData(params.id);


    return (
        <div className='text-white'>{data?.title}</div>
    )
}

export default ServiceDetails