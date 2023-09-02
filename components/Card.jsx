"use client"
import React from 'react'

function Card(Props) {
// console.log(Props.poster_path)
  return (
    <div className='h-full min-w-[180px]  p-4'>
      <div className='image w-full h-[225px] bg-center bg-cover bg-red-900 rounded-md overflow-hidden'>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${Props.poster_path}`} className=' w-[100%] h-[100%] object-cover' alt="" />
      </div>
      <div className='p-1'>
        {
          Props.title ?
            (<div>
              <h1 className='font-bold text-[13px]'>{Props.title}</h1>
            <p className='text-sm opacity-70'>{Props.release_date}</p>

            </div>)
            :
            (<div>
              <h1 className='font-bold text-[13px]'>{Props.name}</h1>
              <p className='text-sm opacity-70'>{Props.first_air_date}</p>

            </div>)
        }

      </div>
    </div>
  )
}

export default Card