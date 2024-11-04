// import React from 'react'

import Link from "next/link";

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
};
async function ToursPage() {
    const response = await fetch(url);
    const data:Tour[] = await response.json(); 

    // const handleOnClick = () => {
    //   console.log("Clicked")
    // }
    
  return (
    <section>
        <h1 className="text-3xl mb-4">Tours</h1>
        {/* <TourList tours = {data} onClickHandler = {handleOnClick}/> */}
        {data.map((tour) => {
            return(
              <Link key={tour.id} href={`/tours/${tour.id}`} className='hover:text-blue-500'>
                <h2>{tour.name}</h2>
              </Link>              
            );
            })}
    </section>
  )
}

export default ToursPage