import React from 'react'

function Tvcard({CardData}) {
  return (
    <div>
    <div className='w-[28vh] bg-slate-900 h-[55vh] rounded-2xl overflow-hidden flex flex-col gap-8'>
    <div className=' h-[70%] w-[100%] ' ><img className='w-[100%] h-[100%]  ' src={`https://image.tmdb.org/t/p/w220_and_h330_face${CardData.poster_path}`} alt="" /></div>
    <div className='h-[20%] w-[100%] pl-[1vh] gap-2 '>
    <h1 className='text-white text-[2vh]'>{CardData.original_name}</h1>
    <h3 className='text-white'>{CardData.first_air_date}</h3>
    </div>
   
    </div>
    </div>
  )
}

export default Tvcard
