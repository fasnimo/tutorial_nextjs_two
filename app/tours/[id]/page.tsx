import mapsImg from '@/images/maps.jpg'
import React from 'react'
console.log(mapsImg)

export default function page({params}:{params:{id:string}}) {
  return (
    <div>
        <h1 className='text-4xl'>ID : {params.id}</h1>   
    </div>
  );
}
