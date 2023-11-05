import React from 'react'

function Moviescard({CardData}) {

  return (
    <div className='w-[28vh] bg-slate-900 h-[55vh] rounded-2xl overflow-hidden'>
         <div className=' h-[70%] w-[100%] ' ><img className='w-[100%] h-[100%] object-cover' src={CardData.backdrop_path ? `https://image.tmdb.org/t/p/w440_and_h660_face${CardData.backdrop_path}` : ''}
         alt="" /></div>
         <div className='h-[20%] w-[100%] pl-[1vh] gap-2 '>
         <h1 className='text-white text-[2vh]'>{CardData.original_title}</h1>
         <h3 className='text-white'>{CardData.release_date}</h3>
         </div>
        
         </div>
  )
}

export default Moviescard
